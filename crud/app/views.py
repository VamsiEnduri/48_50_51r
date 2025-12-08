from django.shortcuts import render
# from django.http import JsonResponse
# Create your views here.
from rest_framework.decorators import api_view
from rest_framework.response import Response
def ems(request):
    return render(request,"ems.html")

@api_view(["PUT"])
def edit_emp(request,e_id):
    data=request.data
    return Response({"msg":f"{e_id} emp successfully edited","data":data})
@api_view(["DELETE"])
def delete_emp(request,e_id):
    return Response({"msg":f"{e_id} emp successfully dleted"})

@api_view(["POST"])
def add_emp(request):
    data=request.data    
    return Response({"msg":"data recived successfully as post req","data":data})
    # return JsonResponse({"msg":"data recived successfully as post req","data":data})