# Generated by Django 2.2.28 on 2023-07-10 03:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_frodo'),
    ]

    operations = [
        migrations.CreateModel(
            name='Sam',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('asca', models.BigIntegerField()),
            ],
        ),
    ]
