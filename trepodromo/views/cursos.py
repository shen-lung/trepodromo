from django.shortcuts import render_to_response

from .base import BaseView


class CursosView(BaseView):

    def get(self, request):
        deportiva_desktop_images_urls = self.get_image_urls('cursos/deportiva/desktop')
        multilargo_desktop_images_urls = self.get_image_urls('cursos/multilargo/desktop')
        multilargo_mobile_images_urls = self.get_image_urls('cursos/multilargo/mobile')

        return render_to_response(
            'cursos.html',
            {
                'deportiva_desktop_images_urls': deportiva_desktop_images_urls,
                'multilargo_desktop_images_urls': multilargo_desktop_images_urls,
                'multilargo_mobile_images_urls': multilargo_mobile_images_urls,
                'title': 'Cursos',
            }
        )
