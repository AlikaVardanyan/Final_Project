from django.db import models

# Create your models here.


class Listing(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    price = models.IntegerField()
    area = models.IntegerField(help_text="m²")
    address = models.CharField(max_length=255)
    image = models.URLField(blank=True)  
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
