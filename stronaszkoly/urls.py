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
from django.urls import path,include
from pages import views,urls
from django.conf.urls.static import static
from django.conf import settings
from accounts import urls
from articles import urls


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.home, name="home"),
    path('artykuly/', include('articles.urls') ),
    path('podstrony/', include('pages.urls') ),
    path('konto/', include('accounts.urls') ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
