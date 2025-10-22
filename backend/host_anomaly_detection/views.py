# Create your views here.
from host_anomaly_detection.models import HostAnomalyDetectionModel
from host_anomaly_detection.serializers import HostAnomalyDetectionModelSerializer, HostAnomalyDetectionModelCreateUpdateSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class HostAnomalyDetectionModelViewSet(CustomModelViewSet):
    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = HostAnomalyDetectionModel.objects.all()
    serializer_class = HostAnomalyDetectionModelSerializer
    create_serializer_class = HostAnomalyDetectionModelCreateUpdateSerializer
    update_serializer_class = HostAnomalyDetectionModelCreateUpdateSerializer

class HostLoadModelViewSet(CustomModelViewSet):
    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = HostAnomalyDetectionModel.objects.all()
    serializer_class = HostAnomalyDetectionModelSerializer
    create_serializer_class = HostAnomalyDetectionModelCreateUpdateSerializer
    update_serializer_class = HostAnomalyDetectionModelCreateUpdateSerializer