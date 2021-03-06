# Generated by Django 3.0.9 on 2020-08-30 00:46

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Officers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=500)),
                ('last_name', models.CharField(blank=True, max_length=500)),
                ('rank', models.CharField(max_length=100)),
                ('picture', models.ImageField(upload_to='')),
                ('profile', models.TextField()),
            ],
        ),
    ]
