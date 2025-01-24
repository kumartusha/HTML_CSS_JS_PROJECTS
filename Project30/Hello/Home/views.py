from django.shortcuts import render, HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("This is First View Page")

def about(request):
    return HttpResponse("This is About View Page")

def projects(request):
    return HttpResponse("This is Projects View Page")

def contact(request):
    return HttpResponse("This is Contact View Page")