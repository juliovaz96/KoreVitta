from rest_framework.response import Response
from rest_framework.views import APIView


class V1RootView(APIView):
    authentication_classes = []
    permission_classes = []

    def get(self, request):
        return Response(
            {
                "data": {
                    "service": "korevitta-backend",
                    "status": "ok",
                    "version": "v1",
                }
            }
        )
