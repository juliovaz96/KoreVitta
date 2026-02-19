from django.urls import path

from .views import V1RootView

urlpatterns = [
    path("", V1RootView.as_view(), name="v1-root"),
]
