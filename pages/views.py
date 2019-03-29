from django.shortcuts import render
from articles.models import Article


def home(request):
    articles = Article.objects.all()
    return render(request, 'index.html', {'articles':articles})

def dokumenty(request):
    return render(request, 'dokumenty.html')

def egzaminy(request):
    return render(request, 'egzaminy.html')

def historia(request):
    return render(request, 'historiaszkoly.html')

def kontakt(request):
    return render(request, 'kontakt.html')

def patron(request):
    return render(request, 'patron.html')

def pracownicy(request):
    return render(request, 'pracownicy.html')

def programy(request):
    return render(request, 'programynauczania.html')

def rekrutacja(request):
    return render(request, 'rekrutacja.html')

def terminy(request):
    return render(request, 'terminy.html')

def zdjecia(request):
    return render(request, 'zdjecia.html')