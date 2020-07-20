from django.db import models


class Pokemon (models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(max_length=200)
    type1 = models.TextField(max_length=30)
    type2 = models.TextField(max_length=30, blank=True)
