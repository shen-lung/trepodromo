from django.shortcuts import render_to_response

from .base import BaseView


class ClasesView(BaseView):

    def get(self, request):
        images_urls = self.get_image_urls('clases')

        return render_to_response(
            'clases.html',
            {
            	'images_urls': images_urls,
            	'title': 'Clases',
        	},
        )
