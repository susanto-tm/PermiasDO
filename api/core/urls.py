from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OfficersViewSet

router = DefaultRouter()
router.register(r'officers', OfficersViewSet)

urlpatterns = [
    path("", include(router.urls))
]