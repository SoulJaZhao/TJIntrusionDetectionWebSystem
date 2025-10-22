import { CrudOptions, AddReq, DelReq, EditReq, dict, CrudExpose, UserPageQuery, CreateCrudOptionsRet} from '@fast-crud/fast-crud';
import _ from 'lodash-es';
import * as api from './api';
import { request } from '/@/utils/service';
import {auth} from "/@/utils/authFunction";

//此处为crudOptions配置
export default function ({ crudExpose}: { crudExpose: CrudExpose}): CreateCrudOptionsRet {
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
                        export:{
                            // 注释编号:django-vue3-admin-crud210716:注意这个auth里面的值，最好是使用index.vue文件里面的name值并加上请求动作的单词
                            show: auth('HostLoadModelViewSet:Export'),
                            text:"导出",//按钮文字
                            title:"导出",//鼠标停留显示的信息
                            click(){
                                return exportRequest(crudExpose.getSearchFormData())
                                // return exportRequest(crudExpose!.getSearchFormData())    // 注意这个crudExpose!.getSearchFormData()，一些低版本的环境是需要添加!的
                            }
                        },
                        add: {
                            show: auth('HostLoadModelViewSet:Create'),
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
                        show: auth('HostLoadModelViewSet:Retrieve')
                    },
                    edit: {
                        type: 'text',
                        order: 2,
                        show: auth('HostLoadModelViewSet:Update')
                    },
                    copy: {
                        type: 'text',
                        order: 3,
                        show: auth('HostLoadModelViewSet:Copy')
                    },
                    remove: {
                        type: 'text',
                        order: 4,
                        show: auth('HostLoadModelViewSet:Delete')
                    },
                },
            },
            columns: {
                host_name: {
                    title: '主机名',
                    type: 'input',
                    search: { show: true},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '主机名必填' }],
                        component: {
                            placeholder: '请输入主机名',
                        },
                    },
                },
                cpu_r: {
                    title: 'CPU使用率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        helper: {
                            render() {
                                return <div style={"color:blue"}>商品是必需要填写的</div>;
                                }
                            },
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                load_1: {
                    title: '1分钟平均负载',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                load_5: {
                    title: '5分钟平均负载',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                load_15: {
                    title: '15分钟平均负载',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                si: {
                    title: '系统中断次数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                so: {
                    title: '系统调用次数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                mem_shmem: {
                    title: '共享内存使用量',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                mem_u: {
                    title: '内存使用率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                mem_u_e: {
                    title: '内存使用效率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                disk_q: {
                    title: '磁盘队列长度',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                total_mem: {
                    title: '总内存',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                disk_r: {
                    title: '磁盘读速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                disk_rb: {
                    title: '磁盘读速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                disk_svc: {
                    title: '磁盘服务时间',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                disk_u: {
                    title: '磁盘使用率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                disk_w: {
                    title: '磁盘写速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                disk_wa: {
                    title: '磁盘写速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                disk_wb: {
                    title: '磁盘写速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                si: {
                    title: '系统中断次数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                so: {
                    title: '系统调用次数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                eth1_fi: {
                    title: 'eth1接收包速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                eth1_fo: {
                    title: 'eth1发送包速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                eth1_pi: {
                    title: 'eth1接收包速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                eth1_po: {
                    title: 'eth1发送包速率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                tcp_tw: {
                    title: 'tcp_tw状态数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                tcp_use: {
                    title: 'tcp使用率',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                active_opens: {
                    title: '主动打开连接数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                curr_estab: {
                    title: '当前连接数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                in_errs: {
                    title: '接收错误包数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                in_segs: {
                    title: '接收数据包数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                out_segs: {
                    title: '发送数据包数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                listen_overflows: {
                    title: '监听队列溢出次数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                out_rsts: {
                    title: '发送复位包数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                passive_opens: {
                    title: '被动打开连接数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                retrans_segs: {
                    title: '重传数据包数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                tcp_timeouts: {
                    title: 'tcp超时次数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                udp_in_dg: {
                    title: 'udp接收数据包数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                udp_out_dg: {
                    title: 'udp发送数据包数',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                udp_rcv_buf_errs: {
                    title: '接收缓冲区错误',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                udp_snd_buf_errs: {
                    title: '发送缓冲区错误',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                },
                status: {
                    title: '运行状态',
                    type: 'input',
                    search: { show: false},
                    column: {
                        minWidth: 120,
                        sortable: 'custom',
                    },
                    form: {
                        rules: [{ required: true, message: '商品名称必填' }],
                        component: {
                            placeholder: '请输入商品名称',
                        },
                    },
                }
            },
        },
    };
}