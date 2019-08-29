"""stronaszkoly URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from accounts import views


urlpatterns = [
    path('logowanie', views.renderlogin, name="logowanie"),
    path('logowaniefunction', views.loginfunc, name="loginfunc"),
    path('dodawanieuzytkownika', views.rendersignup, name="dodajusera"),
    path('signupfunction', views.signupfunc, name="signupfunc"),
    path('usuwanie', views.delete_form, name="usuwanie"),
    path('usuwaniefunc/<int:user_id>', views.delete_func, name="usuwaniefunc"),
    path('logout', views.logoutfunc, name="logout"),
]
