from rest_framework import serializers
from .models import Officers


class OfficersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Officers
        fields = ('id', 'first_name', 'last_name', 'rank', 'picture', 'profile')
