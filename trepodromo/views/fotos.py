from django.shortcuts import render_to_response

from .base import BaseView


class FotosView(BaseView):

    def get(self, request):
        col1_images_urls = self.get_image_urls('fotos/col1')
        col2_images_urls = self.get_image_urls('fotos/col2')
        col3_images_urls = self.get_image_urls('fotos/col3')
        col4_images_urls = self.get_image_urls('fotos/col4')

        return render_to_response(
            'fotos.html',
            {
                'col1_images_urls': col1_images_urls,
                'col2_images_urls': col2_images_urls,
                'col3_images_urls': col3_images_urls,
                'col4_images_urls': col4_images_urls,
                'title': 'Fotos',
            },
        )
