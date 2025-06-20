# Generated by Django 5.2.1 on 2025-05-28 16:36

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Item',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('description', models.CharField(default='', max_length=120)),
                ('recipe', models.TextField()),
                ('price', models.FloatField()),
            ],
        ),
        migrations.CreateModel(
            name='Location',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=150)),
                ('tables', models.IntegerField()),
                ('guests', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('table', models.IntegerField()),
                ('guests', models.IntegerField()),
                ('total', models.FloatField()),
                ('finalized_list', models.JSONField()),
                ('completed', models.BooleanField()),
                ('location', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.location')),
            ],
        ),
        migrations.CreateModel(
            name='AddItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('qty', models.IntegerField()),
                ('price', models.FloatField()),
                ('guest', models.IntegerField()),
                ('item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.item')),
                ('order', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='order.order')),
            ],
        ),
    ]
