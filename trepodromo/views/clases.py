from django.shortcuts import render_to_response

from .base import BaseView


class ClasesView(BaseView):

    def get(self, request):
        desktop_images_urls = self.get_image_urls('clases/desktop')
        mobile_images_urls = self.get_image_urls('clases/mobile')
        
        return render_to_response(
            'clases.html',
            {
            	'desktop_images_urls': desktop_images_urls,
                'mobile_images_urls': mobile_images_urls,
            	'title': 'Clases',
        	},
        )
