from django.contrib import admin
from django.urls import path,include
from pages import views,urls
from django.conf.urls.static import static
from django.conf import settings
from accounts import urls
from articles import urls


urlpatterns = [
    path('c2VjcmV0YWRtaW4/', admin.site.urls),
    path('', views.home, name="home"),
    path('artykuly/', include('articles.urls') ),
    path('podstrony/', include('pages.urls') ),
    path('konto/', include('accounts.urls') ),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
