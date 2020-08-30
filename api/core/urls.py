from django.urls import path, include
from django.conf.urls import url
from rest_framework.routers import DefaultRouter
from .views import OfficersViewSet, GalleryEventViewSet, ImageUploadViewSet

router = DefaultRouter()
router.register(r'officers', OfficersViewSet)
router.register(r'gallery', GalleryEventViewSet)
router.register(r'image_upload', ImageUploadViewSet)


urlpatterns = [
    path("", include(router.urls)),
]