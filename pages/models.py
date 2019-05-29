from django.db import models

class Podstrona(models.Model):
    name = models.CharField(max_length=18, primary_key = True)
    content = models.TextField()

    def __str__(self):
        return self.name

    
    