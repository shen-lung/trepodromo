from django.views.generic import View

import cloudinary
import cloudinary.uploader
import cloudinary.api


class BaseView(View):
    def __init__(self):
        cloudinary.config(
            cloud_name = "dnwb39gen",
            api_key = "495386834639552",
            api_secret = "vbWYj0rZxw1GwzB2FhR8XSlYXfc"
        )
        self.image_api = cloudinary.api

    def get_image_urls(self, folder_prefix):
        escalada_images = self.image_api.resources(
            type='upload',
            prefix='trepodromo/{}/'.format(folder_prefix),
            max_results=1000,
        ).get('resources')

        return [
            image['secure_url']
            for image in escalada_images
        ]
