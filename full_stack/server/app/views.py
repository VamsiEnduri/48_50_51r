from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Admins,Trainers
# Create your views here.

@api_view(["POST"])
def create_trainer(request):
    reqdata=request.data
    abc=int(reqdata["ad_id"]) # "1"---> 1
    xyz=Admins.objects.get(id=abc)

    Trainers.objects.create(
        name=reqdata["name"],
        email=reqdata["email"],
        exp =reqdata["exp"],
        admin=xyz
    )

    return Response({"msg":"trainer added successfully"})

@api_view(["POST"])
def register_admin(request):
    reqData=request.data

    Admins.objects.create(
        name=reqData["name"],
        email=reqData["email"],
        password=reqData["password"]
    )

    return Response({"msg":"msg"})