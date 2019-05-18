from django.contrib.auth import get_user_model
from rest_framework import permissions
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
    DestroyAPIView,
    UpdateAPIView
)
from chat.models import Chat, Contact, Profile
from chat.views import get_user_contact
from .serializers import ChatSerializer, ProfileSerializer
from rest_framework import viewsets
import random
from itertools import chain
User = get_user_model()


class ChatListView(ListAPIView):
    serializer_class = ChatSerializer
    permission_classes = (permissions.AllowAny, )

    def get_queryset(self):
        queryset = Chat.objects.all()
        username = self.request.query_params.get('username', None)
        if username is not None:
            contact = get_user_contact(username)
            queryset = contact.chats.all()
        queryset.order_by('-id')


        return queryset


class ChatDetailView(RetrieveAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    permission_classes = (permissions.AllowAny, )


class ChatCreateView(CreateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    permission_classes = (permissions.IsAuthenticated, )


class ChatUpdateView(UpdateAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    permission_classes = (permissions.IsAuthenticated, )


class ChatDeleteView(DestroyAPIView):
    queryset = Chat.objects.all()
    serializer_class = ChatSerializer
    permission_classes = (permissions.IsAuthenticated, )



class ProfileDetailView(RetrieveAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.AllowAny, )



class ProfileUpdateView(UpdateAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (permissions.AllowAny, )

class ProfileListView(ListAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (permissions.AllowAny, )
    def get_queryset(self):
        username = None
        username = self.request.query_params.get('username', None)
        if username is not None:
            user = User.objects.get(username=username)
            queryset = Profile.objects.filter(user=user)
        return queryset

class MatchListView(ListAPIView):
    serializer_class = ProfileSerializer
    permission_classes = (permissions.AllowAny, )

    def get_queryset(self):
        queryset = Profile.objects.all()
        username = self.request.query_params.get('username', None)
        user = User.objects.get(username=username)

        user_contact = get_user_contact(username)
        if username is not None:
            profile = Profile.objects.get(user=user)
            if profile.mood == "listener":
                queryset = get_sharer(user)
            elif profile.mood == "sharer":
                queryset = get_listener(user)
            else:
                queryset = get_neutral(user)
       
        for profile in queryset:
            save = True
            chat = Chat()
            chat.save()
            username = profile.user.username
            contact = get_user_contact(username)
            chat.participants.add(user_contact)
            chat.participants.add(contact)
            list1= Chat.objects.filter(participants__in=[user_contact])
            list2= list1.filter(participants__in=[contact])
            if (len(list2) <=1):   
                print('SAVING!!!')         
                chat.save()
            else:
                print('NOT SAVING!!!') 
                print(list2)
                chat.delete()
        return queryset


def get_neutral(user):
    queryset = Profile.objects.all()
    queryset = queryset.exclude(user=user)
    
    if len(queryset) > 6:
        queryset = queryset[:6]
    return queryset


def get_listener(user):
    queryset = Profile.objects.all().filter(mood='listener')
    queryset = queryset.exclude(user=user)
   
    if len(queryset) <=0:
        queryset = Profile.objects.all()
        queryset = queryset.exclude(user=user)
    if len(queryset) > 6:
        queryset = queryset[:6]
    return queryset

def get_sharer(user):
    queryset = Profile.objects.all().filter(mood='sharer')
    queryset = queryset.exclude(user=user)
    
    if len(queryset) <= 0 :
        queryset = Profile.objects.all()
        queryset = queryset.exclude(user=user)
    if len(queryset) > 6:
        queryset = queryset[:6]
    return queryset

