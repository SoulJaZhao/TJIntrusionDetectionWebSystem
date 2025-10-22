from django.db import models
from dvadmin.utils.models import CoreModel

class NetworkIntrusionDetectionModel(CoreModel):
    src_ip = models.TextField(verbose_name="源IP", default="无")
    dst_ip = models.TextField(verbose_name="目的IP", default="无")
    src_port = models.TextField(verbose_name="源端口", default="无")
    dst_port = models.TextField(verbose_name="目的端口", default="无")
    src_node = models.TextField(verbose_name="源节点", default="无")
    dst_node = models.TextField(verbose_name="目的节点", default="无")
    protocol = models.TextField(verbose_name="协议", default="无")
    flow_duration = models.TextField(verbose_name="流持续时间", default="无")
    traffic_type = models.TextField(verbose_name="流量类型", default="无")
    attack_type = models.TextField(verbose_name="攻击类型", default="无")
    in_bytes = models.TextField(verbose_name="输入字节", default="无")
    out_bytes = models.TextField(verbose_name="输出字节", default="无")
    in_pkts = models.TextField(verbose_name="输入数据包", default="无")
    out_pkts = models.TextField(verbose_name="输出数据包", default="无")
    tcp_flag = models.TextField(verbose_name="TCP标志", default="无")
    create_datetime = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")

    class Meta:
        db_table = "network_traffic"
        verbose_name = '网络流量'
        verbose_name_plural = verbose_name
        ordering = ('-create_datetime',)
