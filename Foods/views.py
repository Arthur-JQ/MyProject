from django.shortcuts import render,redirect
from django.urls import path
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import login
from django.contrib.auth import logout
from .models import Food, Image, Category


def index(request):
    foods = Food.objects.all()
    return render(request, 'index.html', {'foods': foods})


def catalog(request):
    return render(request, 'catalog.html')


def create(request):
    if request.method == 'POST':
        name = request.POST['name']
        price = request.POST['price']
        image = request.POST['image']
        food = Food(name=name, price=price, image=image)
        food.save()
        return redirect('index')
    else:
        return render(request, 'create.html')

def contact (request):
    category = Category.objects.all()
    foods = Food.objects.all()

    if request.method == 'GET':
        print(request.GET)
    return render(request, 'contact.html', {'foods': foods, 'category': category})

def update(request, id):
    food = Food.objects.get(id=id)
    return render(request, 'update.html', {'food': food})

def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('home')  # Убедитесь, что 'home' существует
        else:
            print("Form errors:", form.errors)
    else:
        form = UserCreationForm()
    
    return render(request, 'registration/register.html', {'form': form})

def logout(request):
    logout(request)
    return redirect('home')


def profile(request, id):
    return render(request, 'profile.html')