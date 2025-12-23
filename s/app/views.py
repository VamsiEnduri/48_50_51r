from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import StudentsSerializer
from .models import Students
# Create your views here.
@api_view(["GET"]) # serialization
def get_students(req):
    # rData=req.data 
    sData=Students.objects.all()
    s=StudentsSerializer(sData,many=True)
    print(s)
    return Response(s.data)



@api_view(["POST"]) # de-serialization
def add_student(req):
    rData=req.data
    s=StudentsSerializer(data=rData) # json :-- automatically model object 

    if s.is_valid(): #True
        s.save()
        return Response({"msg":"student created successfully."})

    return Response({"msg":"something happend"}) 

    # json --> model object -- > db store :-- de-serialization   