from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import Products
from rest_framework.response import Response
# Create your views here.

@api_view(["PUT"])
def edit_product(request,id):
    editableProduct=Products.objects.get(id=id)
    reData=request.data
    editableProduct.pName=reData["n"]
    editableProduct.pDesc=reData["d"]
    editableProduct.pPrice=reData["p"]
    editableProduct.pCat=reData["c"]
    editableProduct.pImg=reData["i"]
    editableProduct.save()
    return Response({"msg":f"edited {id} record in table"})

@api_view(["DELETE"])
def delete_product(request,id):
    Products.objects.get(id=id).delete()
    return Response({"msg":f"you have deleted item in table with id number {id}"})

@api_view(["GET"])
def get_products(request):
    allRows=Products.objects.all()
    allData=[]
    for i in allRows:
        allData.append({
            "id":i.id,
        "n" : i.pName,
        "d" : i.pDesc,
        "p" : i.pPrice ,
        "c" : i.pCat,
        "i" : i.pImg
    })

    return Response({"msg":"data fetched successfully...","data":allData})


def productForm(request):
    return render(request,"productForm.html")

@api_view(["POST"])
def create_product(request):
    a=request.data.get("n")
    b=request.data.get("d")
    c=request.data.get("p")
    d=request.data.get("c")
    e=request.data.get("i")
    # newProduct={
    #     "n":pName ,
    #     "d":pDesc , 
    #     "p":pPrice,
    #     "c":pCat,
    #     "i:pImg
    #  }
    # return    
    Products.objects.create(
        pName=a,
        pDesc=b,
        pPrice=c,
        pCat=d,
        pImg=e
    )

    return Response({"msg":"product added successfully....."})



    # pip install djangorestframework