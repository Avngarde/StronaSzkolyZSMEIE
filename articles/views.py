from django.shortcuts import render,redirect, get_object_or_404
from django.contrib.auth.decorators  import login_required
from .models import Article


@login_required
def renderarticleform(request):
    return render(request,'addarticle.html')

@login_required
def addarticle(request):
    if request.method=="POST":
        if request.POST['title'] and request.POST['description'] and request.POST['content'] and request.FILES['icon']:
            article = Article()
            article.title = request.POST['title']
            article.description = request.POST['description']
            article.content = request.POST['content']
            article.icon = request.FILES['icon']
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