from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    content = models.CharField(max_length=1200)
    add_date = models.DateField()
    icon = models.ImageField(upload_to="icons/")