from rest_framework.routers import SimpleRouter

from .views import NetworkIntrusionDetectionModelViewSet, NetworkTrafficModelViewSet

router = SimpleRouter()
# 这里进行注册路径，并把视图关联上，这里的api地址以视图名称为后缀，这样方便记忆api/NetworkIntrusionDetectionModelViewSet
router.register("api/NetworkIntrusionDetectionModelViewSet", NetworkIntrusionDetectionModelViewSet)
router.register("api/NetworkTrafficModelViewSet", NetworkTrafficModelViewSet)

urlpatterns = [
]

urlpatterns += router.urls