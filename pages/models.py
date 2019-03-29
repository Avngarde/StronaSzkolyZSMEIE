from django.db import models

class Podstrona(models.Model):
    name = models.CharField(max_length=18)
    content = models.TextField()
