from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('listing/<int:id>/', views.listing_detail, name='listing_detail'),
    path('menu/', views.menu_page, name='menu'),
    path('projects/', views.projects_page, name='projects'),
     path('project1/', views.project1, name='project1'),
    path('project2/', views.project2, name='project2'),

]
