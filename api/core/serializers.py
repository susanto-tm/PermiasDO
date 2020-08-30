from rest_framework import serializers
from .models import Officers, GalleryEvent, ImageUpload


class OfficersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Officers
        fields = ('id', 'first_name', 'last_name', 'rank', 'picture', 'profile')


class ImageUploadSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageUpload
        fields = '__all__'


class GalleryEventSerializer(serializers.ModelSerializer):
    images = serializers.SerializerMethodField()

    class Meta:
        model = GalleryEvent
        fields = '__all__'

    def get_images(self, obj):
        images_data = ImageUpload.objects.filter(event_id=obj.event_id)  # get all image_data under the same event key
        return [ImageUploadSerializer(image).data for image in images_data]  # return serialized image data





