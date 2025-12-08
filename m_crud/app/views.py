from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Products
# Create your views here.
def productForm(request):
    return render(request,"productForm.html")

@api_view(["DELETE"])
def delete_products(request):
    Products.objects.all().delete()
    return Response({"msg":"deleted successfulyyyy.........."})


@api_view(["GET"])
def get_products(request):
    a=Products.objects.all()
    lData=[]
    for i in a:
        lData.append({
            "id":i.id,
            "name":i.nameP,
            "desc":i.descP,
            "price":i.priceP,
            "cat":i.catP,
            "img":i.imgP
        })
    print(lData)    
    return Response({"data":lData})   
    # print(a,"aaa12345678========-------------------")
    


@api_view(["POST"])
def product_add(request):

    # pData=request.data
    pn=request.data.get("name")
    pd=request.data.get("desc")
    pp=request.data.get("price")
    pc=request.data.get("cat")
    pi=request.data.get("img")

    Products.objects.create(
        nameP=pn,
        descP=pd,
        priceP=pp,
        catP=pc,
        imgP=pi,
        # name/P=pn,
    )
    # print(pData)

    return Response({"msg":"prouct recived successfully.."})

