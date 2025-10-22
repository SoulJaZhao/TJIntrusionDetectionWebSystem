from network_intrusion_detection.models import NetworkIntrusionDetectionModel
from dvadmin.utils.serializers import CustomModelSerializer


class NetworkIntrusionDetectionModelSerializer(CustomModelSerializer):
    """
    序列化器
    """
#这里是进行了序列化模型及所有的字段
    class Meta:
        model = NetworkIntrusionDetectionModel
        fields = "__all__"

#这里是创建/更新时的列化器
class NetworkIntrusionDetectionModelCreateUpdateSerializer(CustomModelSerializer):
    """
    创建/更新时的列化器
    """

    class Meta:
        model = NetworkIntrusionDetectionModel
        fields = '__all__'