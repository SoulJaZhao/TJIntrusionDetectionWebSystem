#文件backend/host_management/models.py

from django.db import models

# Create your models here.
from dvadmin.utils.models import CoreModel


class HostModel(CoreModel):
    name = models.CharField(max_length=255, verbose_name="节点名称")
    os = models.CharField(max_length=255, verbose_name="操作系统")
    status = models.TextField(verbose_name="状态")
    cpu_model = models.CharField(max_length=255, verbose_name="CPU型号")
    cpu_allocation = models.IntegerField(verbose_name="CPU核心数")
    memory_allocation = models.FloatField(verbose_name="内存大小")
    disk_allocation = models.FloatField(verbose_name="硬盘大小")
    admin_notes = models.TextField(verbose_name="管理员备注")
    created_at = models.DateTimeField(auto_now_add=True, verbose_name="创建时间")
    updated_at = models.DateTimeField(auto_now=True, verbose_name="更新时间")

    class Meta:
        db_table = "hosts"
        verbose_name = '节点表'
        verbose_name_plural = verbose_name
        ordering = ('-create_datetime',)