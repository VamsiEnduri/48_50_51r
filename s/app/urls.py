from django.urls import path
from .views import add_student,get_students
urlpatterns=[
    path("add_student/",add_student),
    path("get_students/",get_students)
]