from django.contrib.auth.models import User, Group
from bank.models import Branch, Account, Customer, Product
from rest_framework import serializers


# class leadViewSet(viewSet.ModelsViewSet):
#     permission_classes = [
#         permissions.IsAuthenticated
#     ]

#     serializers_class = LeadSerializer

#     def get_queryset(self):
#         return self.request.user.leads.all()
    
#     def perform_create(self, serializers)

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'email', 'groups']


class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ['id', 'url', 'name']
    

#########
class BranchSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Branch
        fields = ['id', 'branch_name', 'branch_location']

    
# ########
class AccountSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Account
        fields = ['id', 'product_options', 'username', 'email']


class CustomerSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Customer
        fields = ['id', 'customer_name']


class ProductSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Product
        fields = ['id', 'product_options']