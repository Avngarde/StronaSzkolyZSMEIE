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
from django.conf.urls import handler404,handler500
from . import views

urlpatterns = [
    path('dokumenty', views.dokumenty, name="dokumenty"),
    path('egzaminy', views.egzaminy, name="egzaminy"),
    path('historiaszkoly', views.historia, name="historiaszkoly"),
    path('kontakt', views.kontakt, name="kontakt"),
    path('patron', views.patron, name="patron"),
    path('pracownicy', views.pracownicy, name="pracownicy"),
    path('programynauczania', views.programy, name="program"),
    path('rekrutacja', views.rekrutacja, name="rekrutacja"),
    path('terminy', views.terminy, name="terminy"),
    path('zdjecia', views.zdjecia, name="zdjecia"),
    path('archiwum/<int:date>', views.archiwum, name="archiwum"),
    path('archiwumartykuly', views.archiwumartykuly, name="archiwumartykuly"),
    path('archiwumszukaj', views.archiwumsearch, name="archiwumsearch"),
    path('edycja/<str:subpage_name>', views.edycjarender, name="edycjarender"),
    path('<str:subpage_name>/edytowanie', views.edycjafunc, name="edycjafunc"),
] 
