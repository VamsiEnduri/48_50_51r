from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Admins,Trainers
# Create your views here.
@api_view(["DELETE"])
def delete_trainer(request,id):
    Trainers.objects.get(id=id).delete()
    return Response({"msg":f"{id} trainer deleted successfully..."})


@api_view(["GET"])
def get_trainers(request):
    allT=Trainers.objects.all().values()
    return Response({"msg":"trainers fetched successfullyy","data":allT})

@api_view(["POST"])
def create_trainer(request):
    reqdata=request.data
    abc=int(reqdata["ad_id"]) # "1"---> 1
    xyz=Admins.objects.get(id=abc) # 4 :--- 1 {1,sanny,sanny@gmail.com}

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