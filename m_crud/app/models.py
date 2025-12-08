from django.db import models

# Create your models here.

# model code 
# python class 
# python class :-- model 
# model db :-- tables 
# orm :- object    realational mapper 
#        py class      tables     conevrter
# django       
# Create
class Products(models.Model):
    #code 
    nameP=models.CharField(max_length=100)
    descP=models.TextField()
    priceP=models.IntegerField()
    catP=models.CharField(max_length=100)
    imgP=models.CharField(max_length=100)

    def __str__(self):
        return self.nameP