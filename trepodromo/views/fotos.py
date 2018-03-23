from django.shortcuts import render_to_response

from .base import BaseView


class FotosView(BaseView):

    def get(self, request):
        images_urls = self.get_image_urls('fotos')

        return render_to_response(
            'fotos.html',
            {
                'images_urls': images_urls,
                'title': 'Fotos',
            },
        )
