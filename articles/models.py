from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=50)
    description = models.CharField(max_length=100)
    content = models.CharField(max_length=1200)
    add_date = models.DateField(auto_now_add=True)
    icon = models.ImageField(upload_to="icons/")


    file1 = models.FileField(upload_to="articles/", blank=True, null=True)
    file2 = models.FileField(upload_to="articles/", blank=True, null=True)
    file3 = models.FileField(upload_to="articles/", blank=True, null=True)
    file4 = models.FileField(upload_to="articles/", blank=True, null=True)
    file5 = models.FileField(upload_to="articles/", blank=True, null=True)

    def __str__(self):
        return self.title