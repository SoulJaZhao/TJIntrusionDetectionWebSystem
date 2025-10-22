# Create your views here.
from network_intrusion_detection.models import NetworkIntrusionDetectionModel
from network_intrusion_detection.serializers import NetworkIntrusionDetectionModelSerializer, NetworkIntrusionDetectionModelCreateUpdateSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class NetworkIntrusionDetectionModelViewSet(CustomModelViewSet):
    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = NetworkIntrusionDetectionModel.objects.all()
    serializer_class = NetworkIntrusionDetectionModelSerializer
    create_serializer_class = NetworkIntrusionDetectionModelCreateUpdateSerializer
    update_serializer_class = NetworkIntrusionDetectionModelCreateUpdateSerializer

class NetworkTrafficModelViewSet(CustomModelViewSet):
    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = NetworkIntrusionDetectionModel.objects.all()
    serializer_class = NetworkIntrusionDetectionModelSerializer
    create_serializer_class = NetworkIntrusionDetectionModelCreateUpdateSerializer
    update_serializer_class = NetworkIntrusionDetectionModelCreateUpdateSerializer