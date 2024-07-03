from django.contrib import admin
from .models import Categoria, Tecnologia, Proyecto

# Register your models here.
#Registro de modelos en el panel de administración
admin.site.register(Categoria)
admin.site.register(Tecnologia)
admin.site.register(Proyecto)
