from django.shortcuts import render_to_response

from .base import BaseView


class CursosView(BaseView):

    def get(self, request):
        deportiva_images_urls = self.get_image_urls('cursos/deportiva')
        multilargo_images_urls = self.get_image_urls('cursos/multilargo')

        return render_to_response(
            'cursos.html',
            {
                'deportiva_images_urls': deportiva_images_urls,
                'multilargo_images_urls': multilargo_images_urls,
                'title': 'Cursos',
            }
        )
