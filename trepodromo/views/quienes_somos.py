from django.shortcuts import render_to_response
from django.views.generic import View


class QuienesSomosView(View):

    def get(self, request, *args, **kwargs):
        return render_to_response(
            'quienes_somos.html',
            {
                'title': 'Quienes Somos',
            }
        )
