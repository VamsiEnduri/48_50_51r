from django.db import models

# Create your models here.

class Products(models.Model): # Products table
    pName=models.CharField(max_length=100)
    pDesc=models.TextField()
    pPrice=models.IntegerField()
    pCat=models.CharField(max_length=100)
    pImg=models.CharField(max_length=100)

    def __str__(self):
        return self.pName




