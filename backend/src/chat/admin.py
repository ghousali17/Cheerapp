from django.contrib import admin

from .models import Contact, Chat, Message, Profile

admin.site.register(Chat)
admin.site.register(Profile)
admin.site.register(Contact)
admin.site.register(Message)
