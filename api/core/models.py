from django.db import models
import datetime


# Create your models here.
class Officers(models.Model):
    first_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500, blank=True)
    rank = models.CharField(max_length=100)
    picture = models.ImageField()
    profile = models.TextField()

    def __str__(self):
        return f'Officer: {self.first_name} {self.last_name} as {self.rank}'


class ImageUpload(models.Model):
    image_id = models.CharField(max_length=100)
    event_id = models.ForeignKey('GalleryEvent', null=True, on_delete=models.CASCADE)
    image = models.ImageField()

    def __str__(self):
        return self.image_id


class GalleryEvent(models.Model):
    event_id = models.CharField(max_length=100, null=False, primary_key=True)
    name = models.CharField(max_length=200, blank=False)
    description = models.TextField(blank=True)
    date = models.DateField(default=datetime.date.today)

    def __str__(self):
        return self.event_id


