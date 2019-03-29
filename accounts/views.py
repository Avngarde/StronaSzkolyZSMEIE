from django.shortcuts import render,redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators  import login_required


def renderlogin(request):
    return render(request, 'login.html')

def loginfunc(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)

    if user is not None:
        login(request,user)
        return redirect('home')
    else:
        return redirect('home')

@login_required
def rendersignup(request):
    return render(request, 'adduser.html')

@login_required
def signupfunc(request):
    try:
        user = User.objects.get(username = request.POST['username'])
        return redirect('home')
    except User.DoesNotExist:
        user = User.objects.create_user(
            username = request.POST['username'],
            email = request.POST['email'],
            password = request.POST['password'], 
            is_staff = True)

        return redirect('home')

def logoutfunc(request):
    logout(request)
    return redirect('home')
