from django.shortcuts import render, get_object_or_404
from .models import Listing

def home(request):
    listings = Listing.objects.all().order_by('-created_at')
    return render(request, "home.html", {"listings": listings})

def listing_detail(request, id):
    listing = get_object_or_404(Listing, id=id)
    return render(request, "listing_detail.html", {"listing": listing})

def menu_page(request):
    return render(request, 'menu.html')

def projects_page(request):
    listings = Listing.objects.all().order_by('-created_at')
    return render(request, 'projects.html', {"listings": listings})
def project1(request):
    return render(request, 'project1.html')

def project2(request):
    return render(request, 'project2.html')
