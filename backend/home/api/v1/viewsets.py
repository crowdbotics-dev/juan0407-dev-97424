from rest_framework import viewsets
from home.models import Chia,Frodo,Sam,Sauron,Chia,Frodo,Sam,Sauron,Chia,Frodo,Sam,Sauron
from .serializers import ChiaSerializer,FrodoSerializer,SamSerializer,SauronSerializer,ChiaSerializer,FrodoSerializer,SamSerializer,SauronSerializer,ChiaSerializer,FrodoSerializer,SamSerializer,SauronSerializer
from rest_framework import authentication
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

from home.api.v1.serializers import (
    SignupSerializer,
    UserSerializer,
)


class SignupViewSet(ModelViewSet):
    serializer_class = SignupSerializer
    http_method_names = ["post"]


class LoginViewSet(ViewSet):
    """Based on rest_framework.authtoken.views.ObtainAuthToken"""

    serializer_class = AuthTokenSerializer

    def create(self, request):
        serializer = self.serializer_class(
            data=request.data, context={"request": request}
        )
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        token, created = Token.objects.get_or_create(user=user)
        user_serializer = UserSerializer(user)
        return Response({"token": token.key, "user": user_serializer.data})

class ChiaViewSet(viewsets.ModelViewSet):
    serializer_class = ChiaSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Chia.objects.all()

class FrodoViewSet(viewsets.ModelViewSet):
    serializer_class = FrodoSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Frodo.objects.all()

class SamViewSet(viewsets.ModelViewSet):
    serializer_class = SamSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Sam.objects.all()

class SauronViewSet(viewsets.ModelViewSet):
    serializer_class = SauronSerializer
    authentication_classes = (authentication.SessionAuthentication, authentication.TokenAuthentication)
    queryset = Sauron.objects.all()
