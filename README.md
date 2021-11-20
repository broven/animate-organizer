# Animate-organizer

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