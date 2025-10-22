from host_anomaly_detection.models import HostAnomalyDetectionModel
from dvadmin.utils.serializers import CustomModelSerializer


class HostAnomalyDetectionModelSerializer(CustomModelSerializer):
    """
    序列化器
    """
#这里是进行了序列化模型及所有的字段
    class Meta:
        model = HostAnomalyDetectionModel
        fields = "__all__"

#这里是创建/更新时的列化器
class HostAnomalyDetectionModelCreateUpdateSerializer(CustomModelSerializer):
    """
    创建/更新时的列化器
    """

    class Meta:
        model = HostAnomalyDetectionModel
        fields = '__all__'