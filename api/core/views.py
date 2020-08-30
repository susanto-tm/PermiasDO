from rest_framework import viewsets, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import OfficersSerializer, GalleryEventSerializer, ImageUploadSerializer
from .models import Officers, GalleryEvent, ImageUpload


# Create your views here.
class OfficersViewSet(viewsets.ModelViewSet):
    serializer_class = OfficersSerializer
    queryset = Officers.objects.all()


class GalleryEventViewSet(viewsets.ModelViewSet):
    serializer_class = GalleryEventSerializer
    queryset = GalleryEvent.objects.all()


# class EventViewSet(viewsets.ModelViewSet):
#     serializer_class = EventSerializer
#     queryset = Event.objects.all()


class ImageUploadViewSet(viewsets.ModelViewSet):
    serializer_class = ImageUploadSerializer
    queryset = ImageUpload.objects.all()
