#backend/crud_demo/serializers.py

from alert.models import AlertModel
from dvadmin.utils.serializers import CustomModelSerializer


class AlertModelSerializer(CustomModelSerializer):
    """
    序列化器
    """
#这里是进行了序列化模型及所有的字段
    class Meta:
        model = AlertModel
        fields = "__all__"

#这里是创建/更新时的列化器
class AlertModelCreateUpdateSerializer(CustomModelSerializer):
    """
    创建/更新时的列化器
    """

    class Meta:
        model = AlertModel
        fields = '__all__'