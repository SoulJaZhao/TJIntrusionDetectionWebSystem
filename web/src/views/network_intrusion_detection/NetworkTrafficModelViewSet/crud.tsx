import { CrudOptions, AddReq, DelReq, EditReq, dict, CrudExpose, UserPageQuery, CreateCrudOptionsRet } from '@fast-crud/fast-crud';
import _ from 'lodash-es';
import * as api from './api';
import { request } from '/@/utils/service';
import { auth } from "/@/utils/authFunction";
import { h } from 'vue';

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
        console.log(form);
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
                        show: auth('NetworkTrafficModelViewSet:Export'),
                        text: "导出",
                        title: "导出",
                        click() {
                            return exportRequest(crudExpose.getSearchFormData())
                        }
                    },
                    add: {
                        show: auth('NetworkTrafficModelViewSet:Create'),
                    },
                }
            },
            rowHandle: {
                fixed: 'right',
                width: 200,
                buttons: {
                    view: {
                        type: 'text',
                        order: 1,
                        show: auth('NetworkTrafficModelViewSet:Retrieve')
                    },
                    edit: {
                        type: 'text',
                        order: 2,
                        show: auth('NetworkTrafficModelViewSet:Update')
                    },
                    copy: {
                        type: 'text',
                        order: 3,
                        show: auth('NetworkTrafficModelViewSet:Copy')
                    },
                    remove: {
                        type: 'text',
                        order: 4,
                        show: auth('NetworkTrafficModelViewSet:Delete')
                    },
                },
            },
            columns: {
                src_ip: {
                    title: '源IP',
                    type: 'input',
                    search: { show: true },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '源IP必填' }],
                        component: {
                            placeholder: '请输入源IP',
                        },
                    },
                },
                dst_ip: {
                    title: '目标IP',
                    type: 'input',
                    search: { show: true },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '目的IP必填' }],
                        component: {
                            placeholder: '请输入目的IP',
                        },
                    },
                },
                src_port: {
                    title: '源端口',
                    type: 'input',
                    search: { show: true },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '源端口必填' }],
                        component: {
                            placeholder: '请输入源端口',
                        },
                    },
                },
                dst_port: {
                    title: '目标端口',
                    type: 'input',
                    search: { show: true },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '目的端口必填' }],
                        component: {
                            placeholder: '请输入目的端口',
                        },
                    },
                },
                src_node: {
                    title: '源节点',
                    type: 'input',
                    search: { show: true },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '源节点必填' }],
                        component: {
                            placeholder: '请输入源节点',
                        },
                    },
                },
                dst_node: {
                    title: '目标节点',
                    type: 'input',
                    search: { show: true },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '目的节点必填' }],
                        component: {
                            placeholder: '请输入目的节点',
                        },
                    },
                },
                protocol: {
                    title: '协议',
                    type: 'input',
                    search: { show: true },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '协议必填' }],
                        component: {
                            placeholder: '请输入协议',
                        },
                    },
                },
                in_bytes: {
                    title: '输入字节',
                    type: 'input',
                    search: { show: false },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '输入字节必填' }],
                        component: {
                            placeholder: '请输入输入字节',
                        },
                    },
                },
                out_bytes: {
                    title: '输出字节',
                    type: 'input',
                    search: { show: false },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '输出字节必填' }],
                        component: {
                            placeholder: '请输入输出字节',
                        },
                    },
                },
                in_pkts: {
                    title: '输入数据包',
                    type: 'input',
                    search: { show: false },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '输入数据包必填' }],
                        component: {
                            placeholder: '请输入输入数据包',
                        },
                    },
                },
                out_pkts: {
                    title: '输出数据包',
                    type: 'input',
                    search: { show: false },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '输出数据包必填' }],
                        component: {
                            placeholder: '请输入输出数据包',
                        },
                    },
                },
                tcp_flag: {
                    title: 'TCP标志',
                    type: 'input',
                    search: { show: false },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: 'TCP标志必填' }],
                        component: {
                            placeholder: '请输入TCP标志',
                        },
                    },
                },
                flow_duration: {
                    title: '流持续时间',
                    type: 'input',
                    search: { show: false },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '流持续时间必填' }],
                        component: {
                            placeholder: '请输入流持续时间',
                        },
                    },
                },
                traffic_type: {
                    title: '流量类型',
                    type: 'input',
                    search: { show: false },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '流量类型必填' }],
                        component: {
                            placeholder: '请输入流量类型',
                        },
                    },
                },
                attack_type: {
                    title: '攻击类型',
                    type: 'input',
                    search: { show: false },
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '攻击类型必填' }],
                        component: {
                            placeholder: '请输入攻击类型',
                        },
                    },
                },
                create_datetime: {
                    title: '创建时间',
                    type: 'date',
                    search: { show: false },
                    column: {
                        align: "center",
                        width: 120,
                        component: { name: "fs-date-format", format: "YYYY-MM-DD" }
                    },
                    form: {
                        component: {
                            format: "YYYY-MM-DD",
                            valueFormat: "YYYY-MM-DD",
                            placeholder: '请选择创建时间',
                        }
                    }
                },
            },
        },
    };
}
