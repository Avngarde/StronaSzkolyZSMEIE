from django.shortcuts import render,redirect, get_object_or_404
from articles.models import Article
from django.contrib.auth.decorators  import login_required
from .models import Podstrona

from datetime import datetime


def home(request):
    articles = Article.objects.all()[:10]
    return render(request, 'index.html', {'articles':articles})


def dokumenty(request):
    to_render = Podstrona.objects.get(name="dokumenty")
    return render(request, 'dokumenty.html', {"content":to_render})


def egzaminy(request):
    to_render = Podstrona.objects.get(name="egzaminy")
    return render(request, 'egzaminy.html', {"content":to_render})


def historia(request):
    to_render = Podstrona.objects.get(name="historia")
    return render(request, 'historiaszkoly.html', {"content":to_render})


def kontakt(request):
    to_render = Podstrona.objects.get(name="kontakt")
    return render(request, 'kontakt.html', {"content":to_render})


def patron(request):
    to_render = Podstrona.objects.get(name="patron")
    return render(request, 'patron.html', {"content":to_render})


def pracownicy(request):
    to_render = Podstrona.objects.get(name="pracownicy")
    return render(request, 'pracownicy.html', {"content":to_render})


def programy(request):
    to_render = Podstrona.objects.get(name="programy")
    return render(request, 'programynauczania.html', {"content":to_render})


def rekrutacja(request):
    to_render = Podstrona.objects.get(name="rekrutacja")
    return render(request, 'rekrutacja.html', {"content":to_render})


def terminy(request):
    to_render = Podstrona.objects.get(name="terminy")
    return render(request, 'terminy.html', {"content":to_render})


def zdjecia(request):
    to_render = Podstrona.objects.get(name="zdjecia")
    return render(request, 'zdjecia.html', {"content":to_render})



def archiwum(request, date):
    articles = Article.objects.filter(add_date__year=str(date))
    previous_year = False
    next_year = False
    header_text = "Archiwum {}".format(date)

    if any(list(Article.objects.filter(add_date__year=str(date-1)))): #Checks does articles in previous year exists
            previous_year = True

    if any(list(Article.objects.filter(add_date__year=str(date+1)))): #Checks does articles in next year exists
            next_year = True

    articles_dates_months = [str(article.add_date.month) for article in articles] #Get months of articles in the current year
    
    return render(request, 'archiwum.html', 
    {'articles':articles, 
    'articles_dates_months': articles_dates_months,
    'choosen_date':date,
    'next_year':next_year,
    'header_text': header_text,
    'previous_year':previous_year,})



def archiwumsearch(request):
    if request.method == "POST":
        search_type = request.POST['sposob']
        
        if search_type=="Nazwa":
            looked_name = request.POST['szukaj']
            articles = Article.objects.filter(title=looked_name)
            articles_dates_months = [str(article.add_date.month) for article in articles]
            header_text = "Znalezione artykuły"

            return render(request, 'archiwum.html', 
            {'articles':articles, 
            'header_text': header_text,
            'articles_dates_months': articles_dates_months,})

        if search_type=="Data":
            month = request.POST['miesiąc']
            year = request.POST['rok']
            articles = Article.objects.filter(add_date__year=str(year), add_date__month=str(month))
            articles_dates_months = [str(article.add_date.month) for article in articles]
            header_text = "Znalezione artykuły"

            return render(request, 'archiwum.html', 
            {'articles':articles, 
            'header_text': header_text,
            'articles_dates_months': articles_dates_months,})

    else:
        return redirect('home')


def archiwumartykuly(request):
    return render(request, 'archiwumartykuly.html')


@login_required
def edycjarender(request, subpage_name):
    subpage = get_object_or_404(Podstrona,pk=subpage_name)
    return render(request,'edycja.html', {'subpage':subpage})


@login_required
def edycjafunc(request, subpage_name):
    subpage = get_object_or_404(Podstrona,pk=subpage_name )
    subpage.content = request.POST['content']
    subpage.save()
    return redirect(subpage_name)
