from django.db import models


class Image(models.Model):
    class Meta():
        db_table = 'image'
    
    image_url = models.URLField(max_length = 200)
