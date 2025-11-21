from django.urls import path, include
from django.conf import settings
from . import views


urlpatterns = [
    path('', views.index, name='home'),
    path('profile/<int:id>/', views.profile, name='profile'),
    path('accounts/', include('django.contrib.auth.urls')),
    path('accounts/register/', views.register, name='register'),
    path('accounts/logout/', views.logout, name='logout'),
    path('create/', views.create, name='create'),
    path('catalog/', views.catalog, name='catalog'),
    path('contact/', views.contact, name='contact'),
    path('update/<int:id>/', views.update, name='update'),
]