from django.shortcuts import render,redirect, get_object_or_404
from django.contrib.auth.decorators  import login_required
from django.utils.datastructures import MultiValueDictKeyError
from .models import Article
import os
from stronaszkoly.settings import MEDIA_ROOT


@login_required
def renderarticleform(request):
    return render(request,'addarticle.html')


def add_files_to_article(request,article):
    try:
        article.file1 = request.FILES['file1']
    except MultiValueDictKeyError:
        article.file1 = None

    try:
        article.file2 = request.FILES['file2']
    except MultiValueDictKeyError:
        article.file2 = None

    try:
        article.file3 = request.FILES['file3']
    except MultiValueDictKeyError:
        article.file3 = None

    try:
        article.file4 = request.FILES['file4']
    except MultiValueDictKeyError:
        article.file4 = None
    
    try:
        article.file5 = request.FILES['file5']
    except MultiValueDictKeyError:
        article.file5 = None
    
    return article

@login_required
def addarticle(request):
    if request.method=="POST":
        if request.POST['title'] and request.POST['description'] and request.POST['content'] and request.FILES['icon']:
            article = Article()
            article.title = request.POST['title']
            article.description = request.POST['description']
            article.content = request.POST['content']
            article.icon = request.FILES['icon']

            article = add_files_to_article(request, article)

            article.save()
        return redirect('home')

@login_required
def renderarticleeditform(request,article_id):
    article = get_object_or_404(Article,pk=article_id)
    return render(request, 'editarticle.html', {'article':article})


@login_required
def editarticlefunc(request,article_id):
    article = get_object_or_404(Article, pk=article_id)
    article.title = request.POST['title']
    article.description = request.POST['description']
    article.content = request.POST['content']
    article.icon = request.FILES['icon']
    article.save()
    return redirect('home')


def delete_article_files(article):
    os.remove(MEDIA_ROOT+"/"+str(article.icon))

    if str(article.file1) != '':
        os.remove(MEDIA_ROOT+"/"+str(article.file1))

    if str(article.file2) != '':
        os.remove(MEDIA_ROOT+"/"+str(article.file2))

    if str(article.file3) != '':
        os.remove(MEDIA_ROOT+"/"+str(article.file3))

    if str(article.file4) != '':
        os.remove(MEDIA_ROOT+"/"+str(article.file4))
    
    if str(article.file5) != '':
        os.remove(MEDIA_ROOT+"/"+str(article.file5))


@login_required
def deletearticle(request,article_id):
    article = get_object_or_404(Article, pk=article_id)
    delete_article_files(article)
    article.delete()

    return redirect('home')
    