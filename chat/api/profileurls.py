from django.urls import path, re_path

from .views import (
    ProfileListView,
    ProfileDetailView,
    ProfileUpdateView,
    MatchListView
   )

app_name = 'Chat'

urlpatterns = [
    path('', ProfileListView.as_view()),
    path('<pk>/update/', ProfileUpdateView.as_view()),
    path('matches/', MatchListView.as_view())

   
]

