FROM node:17-alpine
WORKDIR /usr/src/app

LABEL maintainer="zycode277@gmail.com"
ENV NODE_ENV=production
ENV ANIMATE_DIR=/animate

COPY . .

RUN npm install
# CMD "cat package.json"
CMD ["npm", "run", "serve"]

