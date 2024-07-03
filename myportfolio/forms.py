from django import forms
from .models import Contacto

class ContactoForm(forms.ModelForm):
    class Meta:
        model = Contacto
        fields = ['nombre', 'email', 'mensaje']
        widgets = {
            'nombre': forms.TextInput(attrs={'class': 'form-control1'}),
            'email': forms.EmailInput(attrs={'class': 'form-control1'}),
            'mensaje': forms.Textarea(attrs={'class': 'form-control1'}),
        }