from django.core.mail import EmailMessage, send_mail
from django.shortcuts import render_to_response
from django.template import RequestContext
from django.views.generic import View

from trepodromo.forms import Contacto
from trepodromo.settings import EMAIL_HOST_USER


class ContactoView(View):
    def __init__(self):
        self.form = Contacto()

    def get(self, request):
        return render_to_response(
            'contacto.html',
            {
                'form': self.form,
                'title': 'Contacto',
            },
            context_instance=RequestContext(request)
        )

    def post(self, request):
        email_response = ''
        is_success = 0
        form = Contacto(request.POST)

        if form.is_valid():
            subject = 'Trepodromo'
            body = form.cleaned_data['mensage']
            from_email = form.data.get('email')
            msg = EmailMessage(
                subject=subject,
                body=body,
                to=[EMAIL_HOST_USER],
                reply_to=[from_email],
            )
            msg.content_subtype = 'html'
            try:
                msg.send()
                email_response = 'El email fue enviado.'
                is_success = 1
            except:
                email_response = 'El email no fue enviado. Intente nuevamente.'

        return render_to_response(
            'contacto.html',
            {
                'form': self.form,
                'email_response': email_response,
                'is_success': is_success,
                'title': 'Contacto',
            },
            context_instance=RequestContext(request)
        )
