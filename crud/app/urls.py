from django.urls import path
from .views import ems,add_emp,delete_emp,edit_emp
urlpatterns=[
    path("",ems),
    path("api/create-emp/",add_emp),
    path("api/delete-emp/<int:e_id>/",delete_emp),
    path("api/edit-emp/<int:e_id>/",edit_emp),
]