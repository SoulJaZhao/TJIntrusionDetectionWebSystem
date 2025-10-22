# Create your views here.
from host_management.models import HostModel
from host_management.serializers import HostModelSerializer, HostModelCreateUpdateSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class HostModelViewSet(CustomModelViewSet):
    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = HostModel.objects.all()
    serializer_class = HostModelSerializer
    create_serializer_class = HostModelCreateUpdateSerializer
    update_serializer_class = HostModelCreateUpdateSerializer