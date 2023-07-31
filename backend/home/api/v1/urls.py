from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import ChiaViewSet,FrodoViewSet,SamViewSet,SauronViewSet,ChiaViewSet,FrodoViewSet,SamViewSet,SauronViewSet,ChiaViewSet,FrodoViewSet,SamViewSet,SauronViewSet,ChiaViewSet,FrodoViewSet,SamViewSet,SauronViewSet

from home.api.v1.viewsets import (
    SignupViewSet,
    LoginViewSet,
)

router = DefaultRouter()
router.register("signup", SignupViewSet, basename="signup")
router.register("login", LoginViewSet, basename="login")
router.register('chia', ChiaViewSet )
router.register('frodo', FrodoViewSet )
router.register('sam', SamViewSet )
router.register('sauron', SauronViewSet )

urlpatterns = [
    path("", include(router.urls)),
]
