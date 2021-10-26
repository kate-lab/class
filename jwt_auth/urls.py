from .views import RegisterView, LoginView, SingleUserView, CurrentUserView
from django.urls import path

urlpatterns = [
    path('register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('myclassroom/', CurrentUserView.as_view()),
    path('classroom/<int:pk>/', SingleUserView.as_view()),
]