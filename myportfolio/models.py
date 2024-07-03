from django.db import models
from .utils import encrypt_menssage, decrypt_message

# Create your models here.
#my portafolio/models.py

#Modelo para las categorías de los proyectos
class Categoria(models.Model):
    nombre = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.nombre
    
#Modelo para las tecnologías utilizadas en los proyectos
class Tecnologia(models.Model):
    nombre = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nombre
    
#Modelo para los proyectos del portafolio
class Proyecto(models.Model):
    titulo = models.CharField(max_length=200)
    imagen = models.ImageField(upload_to='proyectos/')
    descripcion = models.TextField()
    tecnologias = models.ManyToManyField(Tecnologia)
    link_sitio = models.URLField(max_length=200)
    link_repositorio = models.URLField(max_length=200)
    categoria = models.ForeignKey(Categoria, on_delete=models.CASCADE)

    def __str__(self):
        return self.titulo
    
#models.py archivo
#Modelos del Formulario

class Contacto(models.Model):
    nombre = models.CharField(max_length=100)
    email = models.EmailField()
    mensaje = models.TextField()
    #GREGO NUEVO CAMPO A LA TABLA
    mensaje_cifrado = models.TextField()
    fecha = models.DateTimeField(auto_now_add=True)

    #nueva función
    def save(self, *args, **kwargs):
        #Cifrar dato antes de guardar
        self.mensaje_cifrado = encrypt_menssage(self.mensaje)
        super().save(*args, **kwargs)

    #nueva funcion
    def get_mensaje(self):
        #Descifrar el mensaje al recuperarlo
        return decrypt_message(self.mensaje_cifrado)


    def __str__(self):
        return self.nombre