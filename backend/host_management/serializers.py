#backend/host_management/serializers.py

from host_management.models import HostModel
from dvadmin.utils.serializers import CustomModelSerializer


class HostModelSerializer(CustomModelSerializer):
    """
    序列化器
    """
#这里是进行了序列化模型及所有的字段
    class Meta:
        model = HostModel
        fields = "__all__"

#这里是创建/更新时的列化器
class HostModelCreateUpdateSerializer(CustomModelSerializer):
    """
    创建/更新时的列化器
    """

    class Meta:
        model = HostModel
        fields = '__all__'