from django.shortcuts import render_to_response

from .base import BaseView


class EscaladaView(BaseView):

    def get(self, request):
        desktop_images_urls = self.get_image_urls('escalada/desktop')
        mobile_images_urls = self.get_image_urls('escalada/mobile')

        return render_to_response(
            'escalada.html',
            {
                'desktop_images_urls': desktop_images_urls,
                'mobile_images_urls': mobile_images_urls,
                'title': 'Escalada',
            }
        )
