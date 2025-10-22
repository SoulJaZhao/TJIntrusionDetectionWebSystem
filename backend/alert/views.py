# Create your views here.
from alert.models import AlertModel
from alert.serializers import AlertModelSerializer, AlertModelCreateUpdateSerializer
from dvadmin.utils.viewset import CustomModelViewSet


class AlertModelViewSet(CustomModelViewSet):
    """
    list:查询
    create:新增
    update:修改
    retrieve:单例
    destroy:删除
    """
    queryset = AlertModel.objects.all()
    serializer_class = AlertModelSerializer
    create_serializer_class = AlertModelCreateUpdateSerializer
    update_serializer_class = AlertModelCreateUpdateSerializer