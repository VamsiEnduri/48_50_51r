from django.urls import path
from .views import register_admin,create_trainer,get_trainers,delete_trainer
urlpatterns=[
    path("api/admin_register/",register_admin),
    path("api/create_trainer/",create_trainer),
    path("api/get_trainers/",get_trainers),
    path("api/delete_trainer/<int:id>",delete_trainer)
]