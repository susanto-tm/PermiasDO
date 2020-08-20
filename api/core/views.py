from rest_framework import viewsets
from .serializers import OfficersSerializer
from .models import Officers


# Create your views here.
class OfficersViewSet(viewsets.ModelViewSet):
    serializer_class = OfficersSerializer
    queryset = Officers.objects.all()
