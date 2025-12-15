from django.db import models

# Create your models here.
class Admins(models.Model):
    name=models.CharField(max_length=60)
    email=models.EmailField(unique=True)
    password=models.CharField(max_length=16)

    def __str__(self):
        return self.name


class Trainers(models.Model):
    name=models.CharField(max_length=60)
    email=models.EmailField(unique=True)
    exp=models.IntegerField()
    admin=models.ForeignKey(Admins,on_delete=models.CASCADE)

    def __str__(self):
        return self.name