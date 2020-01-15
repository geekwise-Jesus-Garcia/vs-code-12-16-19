from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Branch(models.Model):
    branch_name = models.CharField(max_length=100)
    branch_location = models.CharField(max_length=200)
    owner = models.ForeignKey(User, related_name="Branch", on_delete=models.CASCADE, null=True)

    def _str_(self):
        return(f" Bank Name {self.branch_name} Branch Location {self.branch_location}")


class Account(models.Model):
    account_options = (
        ('account', 'ACCOUNT'),
        ('checking', 'CHECKING'),
        ('balance', 'BALANCE'),
    )

    username = models.CharField(max_length=100)
    email = models.CharField(max_length=200)
    product_options = models.CharField(max_length=9,
    choices=account_options,
    default=account_options[0],
    )

    def _str_(self):
        return(f"Account Name {self.username} Account Email {self.product_email}")


class Customer(models.Model):
    customer_name = models.CharField(max_length=200)
    

    def _str_(self):
        return(f"Customer Name {self.customer_name}")


class Product(models.Model):
    product_options = (
        ('checking', 'CHECKING'),
        ('saving', 'SAVING'),
        ('credit', 'CREDIT'),
    )

    product_options = models.CharField(max_length=40)
    product_options = models.CharField(max_length=8)
