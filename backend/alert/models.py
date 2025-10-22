from django.db import models
from dvadmin.utils.models import CoreModel


class AlertModel(CoreModel):
    alarm_type = models.TextField(verbose_name="告警类型", default="无")  # ENUM 类型通常用 CharField 代替
    severity = models.TextField(verbose_name="告警严重级别", default="无")  # 低级、中级、高级
    source_ip = models.TextField(verbose_name="源 IP", default="无")  # 可为空
    target_ip = models.TextField(verbose_name="目标 IP", default="无")  # 可为空
    node_id = models.TextField(verbose_name="节点 ID", default="无")  # 发生异常的节点 ID，可为空
    traffic_record_id = models.TextField(verbose_name="网络流量记录 ID", default="无")  # 关联 network_traffic 表的 ID
    node_load_record_id = models.TextField(verbose_name="节点负载记录 ID", default="无")  # 关联节点负载表的 ID
    trigger_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")  # 时间戳
    description = models.TextField(verbose_name="告警详情描述", default="无")  # 详细描述
    status = models.TextField(verbose_name="告警处理状态", default="无")
    response_action = models.TextField(verbose_name="响应措施", default="无")  # 记录系统的响应
    response_time = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")  # 处理时间
    handler = models.TextField(verbose_name="处理人", default="无")  # 处理告警的管理员
    remarks = models.TextField(verbose_name="备注信息", default="无")  # 额外的备注信息

    class Meta:
        db_table = "alert_management"
        verbose_name = "告警管理"
        verbose_name_plural = verbose_name
        ordering = ("-trigger_time",)  # 以触发时间降序排列

