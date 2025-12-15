from django.urls import path
from .views import register_admin,create_trainer
urlpatterns=[
    path("api/admin_register/",register_admin),
    path("api/create_trainer/",create_trainer)
]