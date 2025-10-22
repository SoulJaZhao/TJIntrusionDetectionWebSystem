#文件backend/crud_demo/models.py

from django.db import models

# Create your models here.
from dvadmin.utils.models import CoreModel


class HostAnomalyDetectionModel(CoreModel):
    host_name = models.CharField(max_length=255, verbose_name="主机名", default="无")
    cpu_r = models.FloatField(verbose_name="CPU使用率", default=0)
    load_1 = models.FloatField(verbose_name="1分钟负载", default=0)
    load_5 = models.FloatField(verbose_name="5分钟负载", default=0)
    load_15 = models.FloatField(verbose_name="15分钟负载", default=0)
    mem_shmem = models.FloatField(verbose_name="共享内存使用率", default=0)
    mem_u = models.FloatField(verbose_name="内存使用率", default=0)
    mem_u_e = models.FloatField(verbose_name="内存使用效率", default=0)
    total_mem = models.FloatField(verbose_name="总内存量", default=0)
    disk_q = models.FloatField(verbose_name="磁盘队列长度", default=0)
    disk_r = models.FloatField(verbose_name="磁盘读取操作数", default=0)
    disk_rb = models.FloatField(verbose_name="磁盘读取字节数", default=0)
    disk_svc = models.FloatField(verbose_name="磁盘服务时间", default=0)
    disk_u = models.FloatField(verbose_name="磁盘使用率", default=0)
    disk_w = models.FloatField(verbose_name="磁盘写入操作数", default=0)
    disk_wa = models.FloatField(verbose_name="磁盘写入等待时间", default=0)
    disk_wb = models.FloatField(verbose_name="磁盘写入字节数", default=0)
    si = models.FloatField(verbose_name="从交换分区读取数据量", default=0)
    so = models.FloatField(verbose_name="向交换分区写入数据量", default=0)
    eth1_fi = models.FloatField(verbose_name="eth1输入字节数", default=0)
    eth1_fo = models.FloatField(verbose_name="eth1输出字节数", default=0)
    eth1_pi = models.FloatField(verbose_name="eth1输入数据包数", default=0)
    eth1_po = models.FloatField(verbose_name="eth1输出数据包数", default=0)
    tcp_tw = models.FloatField(verbose_name="TCP短暂等待连接数", default=0)
    tcp_use = models.FloatField(verbose_name="TCP连接使用数", default=0)
    active_opens = models.FloatField(verbose_name="主动打开TCP连接数", default=0)
    curr_estab = models.FloatField(verbose_name="当前打开TCP连接数", default=0)
    in_errs = models.FloatField(verbose_name="接收网络错误数", default=0)
    in_segs = models.FloatField(verbose_name="接收的TCP段数", default=0)
    listen_overflows = models.FloatField(verbose_name="监听队列溢出数", default=0)
    out_rsts = models.FloatField(verbose_name="发送的TCP复位数", default=0)
    out_segs = models.FloatField(verbose_name="发送的TCP段数", default=0)
    passive_opens = models.FloatField(verbose_name="被动打开TCP连接数", default=0)
    retrans_segs = models.FloatField(verbose_name="重传的TCP段数", default=0)
    tcp_timeouts = models.FloatField(verbose_name="TCP超时数", default=0)
    udp_in_dg = models.FloatField(verbose_name="接收的UDP数据包数", default=0)
    udp_out_dg = models.FloatField(verbose_name="发送的UDP数据包数", default=0)
    udp_rcv_buf_errs = models.FloatField(verbose_name="UDP接收缓冲区错误数", default=0)
    udp_snd_buf_errs = models.FloatField(verbose_name="UDP发送缓冲区错误数", default=0)
    status = models.CharField(max_length=255, verbose_name="状态", default="正常")

    class Meta:
        db_table = "host_anomaly_detection"
        verbose_name = '主机异常检测'
        verbose_name_plural = verbose_name
        ordering = ('-create_datetime',)