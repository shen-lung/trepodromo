from django import forms


class Contacto(forms.Form):
    email = forms.EmailField(
        required=True,
        max_length=100,
        widget=forms.TextInput(attrs={"placeholder":"Su email..", "class":"email-field"}),
        label='',
    )
    mensage = forms.CharField(
        required=True,
        widget=forms.Textarea(attrs={"placeholder":"Escribe su mensage.."}),
        label='',
    )
