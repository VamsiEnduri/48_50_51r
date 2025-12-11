from django.urls import path
from .views import productForm,create_product,get_products,delete_product,edit_product
urlpatterns=[
    path("",productForm),
    path("create_product/",create_product),
    path("get_products/",get_products),
    path("delete_product/<int:id>",delete_product),
    path("edit_product/<int:id>",edit_product)
]