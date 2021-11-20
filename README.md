# Animate-organizer
[![CI](https://github.com/broven/animate-organizer/actions/workflows/main.yml/badge.svg)](https://github.com/broven/animate-organizer/actions/workflows/main.yml)
![Docker Pulls](https://img.shields.io/docker/pulls/metajs/animate-organizer)
![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/metajs/animate-organizer)

>  a docker image to organize animate

## Usage
```shell
docker run --name animate-organizer \
-v /animate:/Users/meta/meta/projects/ \ animate/animate-organizer/demo/ \
-e DRY_RUN=false \
--restart always \
--rm \
-d animate-organizer
```
