from django.contrib import admin
from django.urls import path,include
from django.conf.urls import url
from pages import views,urls
from django.conf.urls.static import static
from django.conf import settings
from accounts import urls
from articles import urls
from django.views.static import serve
from stronaszkoly import settings


urlpatterns = [
    path('c2VjcmV0YWRtaW4/', admin.site.urls),
    path('', views.home, name="home"),
    path('artykuly/', include('articles.urls') ),
    path('podstrony/', include('pages.urls') ),
    path('konto/', include('accounts.urls') ),
    url(r'^media/(?P<path>.*)$', serve,{'document_root': settings.MEDIA_ROOT}),
    url(r'^static/(?P<path>.*)$', serve,{'document_root': settings.STATIC_ROOT}),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
