# Animate-organizer
[![CI](https://github.com/broven/animate-organizer/actions/workflows/main.yml/badge.svg)](https://github.com/broven/animate-organizer/actions/workflows/main.yml)
![Docker Pulls](https://img.shields.io/docker/pulls/metajs/animate-organizer)
![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/metajs/animate-organizer)

>  a docker image to organize animate

> This docker will rename your file, use as your own risk!

## Usage
```shell
docker run --name animate-organizer \
-v /animate:/animate \
--restart always \
metajs/animate-organizer:latest
```
速度慢的话， 可以使用阿里云镜像： registry.cn-hangzhou.aliyuncs.com/metajs/animate-organizer:latest
## 说明
1. 启动容器后， 会先扫描`/animate` 文件夹下面的文件， 输出匹配的动漫, 请查看log 看改名是否符合预期
1. 2分钟后会启动修改
1. 定时每4小时执行一次


## related project
- [animate-metainfo-parser-cn: 动漫名原信息解析](https://github.com/broven/animate-metainfo-parser-cn)
- [rss-babel: 过滤出中文字幕的动漫](https://github.com/broven/rss-babel)
