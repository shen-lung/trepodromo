from django.shortcuts import render_to_response

from .base import BaseView


class EventosView(BaseView):

    def get(self, request):
        images_urls = self.get_image_urls('eventos')

        return render_to_response(
            'eventos.html',
            {
                'images_urls': images_urls,
                'title': 'Eventos',
            }
        )
