from django.shortcuts import render,redirect,get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.models import User
from django.contrib.auth.decorators  import login_required
from django.contrib import messages


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
        messages.error(request,"Nie poprawny login bądź hasło")
        return redirect('logowanie')

@login_required
def rendersignup(request):
    return render(request, 'adduser.html')

@login_required
def signupfunc(request):
    if request.method == "POST":
        try:
            User.objects.get(username = request.POST['username'])
            messages.error(request, "Podany użytkownik już istnieje")
            return redirect('dodajusera')
        except User.DoesNotExist:
            User.objects.create_user(
                username = request.POST['username'],
                email = request.POST['email'],
                first_name = request.POST['firstname'],
                last_name = request.POST['lastname'],
                password = request.POST['password'], 
                is_staff = True)
            return redirect('home')

@login_required
def delete_form(request):
    users = User.objects.all()
    return render(request, 'deleteuser.html', {'users': users})

def delete_func(request, user_id):
    user = get_object_or_404(User,pk=user_id)
    user.delete()
    return redirect('home')

def logoutfunc(request):
    logout(request)
    return redirect('home')
