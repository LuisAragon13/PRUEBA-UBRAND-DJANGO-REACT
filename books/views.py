from rest_framework import viewsets
from .serializer import BookSerializer
from .models import Book

# Create your views here.
class BookView(viewsets.ModelViewSet):
    serializer_class = BookSerializer
    queryset = Book.objects.all()