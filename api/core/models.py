from django.db import models


# Create your models here.
class Officers(models.Model):
    first_name = models.CharField(max_length=500)
    last_name = models.CharField(max_length=500, blank=True)
    rank = models.CharField(max_length=100)
    picture = models.ImageField()
    profile = models.TextField()

    def __str__(self):
        return f'Officer: {self.first_name} {self.last_name} as {self.rank}'
