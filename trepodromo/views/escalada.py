from django.shortcuts import render_to_response

from .base import BaseView


class EscaladaView(BaseView):

    def get(self, request):
        images_urls = self.get_image_urls('escalada')

        return render_to_response(
            'escalada.html',
            {
                'images_urls': images_urls,
                'title': 'Escalada',
            }
        )
