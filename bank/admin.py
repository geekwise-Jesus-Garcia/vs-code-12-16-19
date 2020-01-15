from django.contrib import admin
from .models import Account
from .models import Customer
from .models import Product
from .models import Branch



# Register your models here.

admin.site.register(Branch)
admin.site.register(Account)
admin.site.register(Customer)
admin.site.register(Product)


