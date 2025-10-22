import { CrudOptions, AddReq, DelReq, EditReq, dict, CrudExpose, UserPageQuery, CreateCrudOptionsRet} from '@fast-crud/fast-crud';
import _ from 'lodash-es';
import * as api from './api';
import { request } from '/@/utils/service';
import { auth } from "/@/utils/authFunction";

// CRUD 配置
export default function ({ crudExpose }: { crudExpose: CrudExpose }): CreateCrudOptionsRet {
	const pageRequest = async (query: any) => {
		return await api.GetList(query);
	};
	const editRequest = async ({ form, row }: EditReq) => {
		if (row.id) {  
			form.id = row.id;
		}
		return await api.UpdateObj(form);
	};
	const delRequest = async ({ row }: DelReq) => {
		return await api.DelObj(row.id);
	};
	const addRequest = async ({ form }: AddReq) => {
		return await api.AddObj(form);
	};

    const exportRequest = async (query: UserPageQuery) => {
		return await api.exportData(query);
	};

	return {
		crudOptions: {
			request: {
				pageRequest,
				addRequest,
				editRequest,
				delRequest,
			},
			actionbar: {
				buttons: {
					export: {
						show: auth('AlertModelViewSet:Export'),
						text: "导出",
						title: "导出",
						click() {
							return exportRequest(crudExpose.getSearchFormData());
						}
					},
					add: {
						show: auth('AlertModelViewSet:Create'),
					},
				}
			},
			rowHandle: {
				fixed: 'right',
				width: 250, // 调整宽度适应新增按钮
				buttons: {
					view: {
						type: 'text',
						text: '查看',
						order: 1,
						show: auth('AlertModelViewSet:Retrieve'),
						click({ row }) {
							console.log('查看告警:', row);
							// 这里可以弹出详情对话框或跳转
						}
					},
					edit: {
						type: 'text',
						text: '编辑',
						order: 2,
						show: auth('AlertModelViewSet:Update'),
					},
					handleEvent: {
						text: '处理',
						type: 'text',
						order: 3,
						show: true, // 允许所有人可见
						click({ row }) {
							console.log('处理告警:', row);
						}
					},
					copy: {
						type: 'text',
						text: '复制',
						order: 4,
						show: auth('AlertModelViewSet:Copy'),
					},
					remove: {
						type: 'text',
						text: '删除',
						order: 5,
						show: auth('AlertModelViewSet:Delete'),
					},
				},
			},
			columns: {
				alarm_type: {
					title: '告警类型',
					type: 'text',
					search: { show: true },
					column: { minWidth: 120, sortable: 'custom' },
					form: {
						rules: [{ required: true, message: '告警类型必填' }],
						component: { placeholder: '请输入告警类型' },
					},
				},
				severity: {
					title: '告警级别',
					type: 'text',
					search: { show: true },
					dict: dict({ data: [{ value: '低级', label: '低级' }, { value: '中级', label: '中级' }, { value: '高级', label: '高级' }] }),
					column: { minWidth: 100, sortable: 'custom' },
					form: {
						rules: [{ required: true, message: '告警级别必填' }],
						component: { 
							placeholder: '请选择告警级别', 
						},
					},
				},
				source_ip: {
					title: '源 IP',
					type: 'text',
					search: { show: true },
					column: { minWidth: 120, sortable: 'custom' },
					form: { component: { placeholder: '请输入源 IP' } },
				},
				target_ip: {
					title: '目标 IP',
					type: 'text',
					search: { show: true },
					column: { minWidth: 120, sortable: 'custom' },
					form: { component: { placeholder: '请输入目标 IP' } },
				},
				node_id: {
					title: '节点 ID',
					type: 'text',
					search: { show: true },
					column: { minWidth: 120, sortable: 'custom' },
					form: { component: { placeholder: '请输入节点 ID' } },
				},
				trigger_time: {
					title: '触发时间',
					type: 'date',
					search: { show: false },
					column: {
						align: "center",
						width: 150,
						component: { name: "fs-date-format", format: "YYYY-MM-DD HH:mm:ss" }
					},
					form: {
						component: {
							format: "YYYY-MM-DD HH:mm:ss",
							valueFormat: "YYYY-MM-DD HH:mm:ss",
							placeholder: '请选择触发时间',
						}
					}
				},
				description: {
					title: '告警描述',
					type: 'text',
					search: { show: false },
					column: { minWidth: 200, sortable: 'custom' },
					form: { component: { placeholder: '请输入告警描述' } },
				},
				status: {
					title: '处理状态',
					type: 'text',
					search: { show: true },
					dict: dict({ data: [{ value: '未处理', label: '未处理' }, { value: '处理中', label: '处理中' }, { value: '已处理', label: '已处理' }] }),
					column: { minWidth: 100, sortable: 'custom' },
					form: {
						rules: [{ required: true, message: '处理状态必填' }],
						component: { placeholder: '请选择处理状态' },
					},
				},
				response_action: {
					title: '响应措施',
					type: 'text',
					search: { show: false },
					column: { minWidth: 200, sortable: 'custom' },
					form: { component: { placeholder: '请输入响应措施' } },
				},
				response_time: {
					title: '响应时间',
					type: 'date',
					search: { show: false },
					column: {
						align: "center",
						width: 150,
						component: { name: "fs-date-format", format: "YYYY-MM-DD HH:mm:ss" }
					},
					form: {
						component: {
							format: "YYYY-MM-DD HH:mm:ss",
							valueFormat: "YYYY-MM-DD HH:mm:ss",
							placeholder: '请选择响应时间',
						}
					}
				},
				handler: {
					title: '处理人',
					type: 'text',
					search: { show: true },
					column: { minWidth: 120, sortable: 'custom' },
					form: { component: { placeholder: '请输入处理人' } },
				},
				remarks: {
					title: '备注',
					type: 'text',
					search: { show: false },
					column: { minWidth: 200, sortable: 'custom' },
					form: { component: { placeholder: '请输入备注' } },
				},
			},
		},
	};
}
