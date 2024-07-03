#myportfolio/views.py
from django.contrib.auth.decorators import login_required
from django.shortcuts import render, get_object_or_404, redirect
from .forms import ContactoForm
from .models import Proyecto, Contacto

#Vista para la pagina de inicio que muestra los proyectos
def home(request):
    proyectos = Proyecto.objects.all()
    return render(request, 'index.html', {'proyectos': proyectos})

#Vistas Crud administración de usuarios en el formulario de contacto
