from django.urls import path 
from .views import productForm,product_add,get_products,delete_products
urlpatterns=[
    path("",productForm),
    path("api/create_p/",product_add),
    path("api/get_products/",get_products),
    path("api/delete_products/",delete_products)
]