from django.shortcuts import render_to_response

from .base import BaseView


class HomeView(BaseView):

    def get(self, request):
        return render_to_response(
            'home.html',
            {'title': 'Home',},
        )
