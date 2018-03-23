from django.conf import settings
from django.conf.urls import (
    include,
    url,
)
from django.conf.urls.static import static
from django.contrib import admin

from trepodromo.views import (
    clases,
    contacto,
    cursos,
    escalada,
    eventos,
    fotos,
    home,
    quienes_somos,
)

urlpatterns = [
    url(r'^clases/', clases.ClasesView.as_view(), name='clases'),
    url(r'^contacto/', contacto.ContactoView.as_view(), name='contacto'),
    url(r'^cursos/', cursos.CursosView.as_view(), name='cursos'),
    url(r'^eventos/', eventos.EventosView.as_view(), name='eventos'),
    url(r'^escalada/', escalada.EscaladaView.as_view(), name='escalada'),
    url(r'^fotos/', fotos.FotosView.as_view(), name='fotos'),
    url(r'^quienes_somos/', quienes_somos.QuienesSomosView.as_view(), name='quienes_somos'),
    url(r'^$', home.HomeView.as_view(), name='home'),
]
