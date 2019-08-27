from django.urls import path,include
from . import views


urlpatterns = [
    path('renderarticleform', views.renderarticleform, name="renderform"),
    path('articleaddfunc', views.addarticle, name="articlefunc" ),
    path('<int:article_id>', views.renderarticleeditform, name="renderarticleeditform"),
    path('<int:article_id>/editing',views.editarticlefunc, name="editarticlefunc"),
    path('deletearticle/<int:article_id>', views.deletearticle, name="deletearticle")
]