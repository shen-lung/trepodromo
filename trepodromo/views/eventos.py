from django.shortcuts import render_to_response

from .base import BaseView


class EventosView(BaseView):

    def get(self, request):
        desktop_images_urls = self.get_image_urls('eventos/desktop')
        mobile_images_urls = self.get_image_urls('eventos/mobile')
        events_images_urls = self.get_image_urls('eventos/eventos')

        return render_to_response(
            'eventos.html',
            {
                'desktop_images_urls': desktop_images_urls,
                'mobile_images_urls': mobile_images_urls,
                'events_images_urls': events_images_urls,
                'title': 'Eventos',
            }
        )
