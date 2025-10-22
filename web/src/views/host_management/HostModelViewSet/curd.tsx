import { CrudOptions, AddReq, DelReq, EditReq, dict, CrudExpose, UserPageQuery, CreateCrudOptionsRet } from '@fast-crud/fast-crud';
import _ from 'lodash-es';
import * as api from './api';
import { request } from '/@/utils/service';
import { auth } from "/@/utils/authFunction";

//此处为crudOptions配置
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
		return await api.exportData(query)
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
						// 注释编号:django-vue3-admin-crud210716:注意这个auth里面的值，最好是使用index.vue文件里面的name值并加上请求动作的单词
						show: auth('HostModelViewSet:Export'),
						text: "导出",//按钮文字
						title: "导出",//鼠标停留显示的信息
						click() {
							return exportRequest(crudExpose.getSearchFormData())
							// return exportRequest(crudExpose!.getSearchFormData())    // 注意这个crudExpose!.getSearchFormData()，一些低版本的环境是需要添加!的
						}
					},
					add: {
						show: auth('HostModelViewSet:Create'),
					},
				}
			},
			rowHandle: {
				//固定右侧
				fixed: 'right',
				width: 200,
				buttons: {
					view: {
						type: 'text',
						order: 1,
						show: auth('HostModelViewSet:Retrieve')
					},
					edit: {
						type: 'text',
						order: 2,
						show: auth('HostModelViewSet:Update')
					},
					copy: {
						type: 'text',
						order: 3,
						show: auth('HostModelViewSet:Copy')
					},
					remove: {
						type: 'text',
						order: 4,
						show: auth('HostModelViewSet:Delete')
					},
				},
			},
			columns: {
				name: {
					title: '节点名称',
					type: 'text',
					search: { show: true },
					column: {
						minWidth: 120,
						sortable: 'custom',
					},
					form: {
						helper: {
							render() {
								return <div style={"color:blue"}>节点名称是必需要填写的</div>;
							}
						},
						rules: [{ required: true, message: '节点名称必填' }],
						component: {
							placeholder: '请输入节点名称',
						},
					},
				},
				os: {
					title: '操作系统',
					type: 'text',
					search: { show: false },
					column: {
						minWidth: 120,
						sortable: 'custom',
					},
					form: {
						helper: {
							render() {
								return <div style={"color:blue"}>操作系统是必需要填写的</div>;
							}
						},
						rules: [{ required: true, message: '操作系统必填' }],
						component: {
							placeholder: '请输入操作系统',
						},
					},
				},
				cpu_model: {
					title: 'CPU型号',
					type: 'text',
					search: { show: false },
					column: {
						minWidth: 120,
						sortable: 'custom',
					},
					form: {
						helper: {
							render() {
								return <div style={"color:blue"}>CPU型号是必需要填写的</div>;
							}
						},
						rules: [{ required: true, message: 'CPU型号必填' }],
						component: {
							placeholder: '请输入CPU型号',
						},
					},
				},
				cpu_allocation: {
					title: 'CPU核心数',
					type: 'number',
					search: { show: false },
					column: {
						minWidth: 120,
						sortable: 'custom',
					},
					form: {
						helper: {
							render() {
								return <div style={"color:blue"}>CPU核心数是必需要填写的</div>;
							}
						},
						rules: [{ required: true, message: 'CPU核心数必填' }],
						component: {
							placeholder: '请输入CPU核心数',
						},
					},
				},
				memory_allocation: {
					title: '内存',
					type: 'number',
					search: { show: false },
					column: {
						minWidth: 120,
						sortable: 'custom',
					},
					form: {
						helper: {
							render() {
								return <div style={"color:blue"}>内存是必需要填写的</div>;
							}
						},
						rules: [{ required: true, message: '内存必填' }],
						component: {
							placeholder: '请输入内存',
						},
					},
				},
				disk_allocation: {
					title: '硬盘',
					type: 'number',
					search: { show: false },
					column: {
						minWidth: 120,
						sortable: 'custom',
					},
					form: {
						helper: {
							render() {
								return <div style={"color:blue"}>硬盘是必需要填写的</div>;
							}
						},
						rules: [{ required: true, message: '硬盘必填' }],
						component: {
							placeholder: '请输入硬盘',
						},
					},
				},
				created_at: {
					title: '创建时间',
					type: 'date',
					search: { show: false },
					form: {
						// rules: [{ required: true, message: '进货时间必填' }],
						component: {
							//显示格式化
							format: "YYYY-MM-DD",
							//输入值格式
							valueFormat: "YYYY-MM-DD",
							placeholder: '请输入进货时间',
						}
					},
					column: {
						align: "center",
						width: 120,
						component: { name: "fs-date-format", format: "YYYY-MM-DD" }
					}
				},
				updated_at: {
					title: '更新时间',
					type: 'date',
					search: { show: false },
					form: {
						// rules: [{ required: true, message: '进货时间必填' }],
						component: {
							//显示格式化
							format: "YYYY-MM-DD",
							//输入值格式
							valueFormat: "YYYY-MM-DD",
							placeholder: '请输入进货时间',
						}
					},
					column: {
						align: "center",
						width: 120,
						component: { name: "fs-date-format", format: "YYYY-MM-DD" }
					}
				},
				admin_notes: {
					title: '备注',
					type: 'text',
					search: { show: false },
					column: {
						minWidth: 120,
						sortable: 'custom',
					},
					form: {
						helper: {
							render() {
								return <div style={"color:blue"}>备注是必需要填写的</div>;
							}
						},
						rules: [{ required: false, message: '备注必填' }],
						component: {
							placeholder: '请输入备注',
						},
					},
				},
				status: {
					title: '状态',
					type: 'text',
					search: { show: false },
					column: {
						minWidth: 120,
						sortable: 'custom',
					},
					form: {
						helper: {
							render() {
								return <div style={"color:blue"}>状态是必需要填写的</div>;
							}
						},
						rules: [{ required: false, message: '状态必填' }],
						component: {
							placeholder: '请输入状态',
						},
					},
				},
			},
		},
	};
}