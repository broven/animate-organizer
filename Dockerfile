FROM node:17-alpine
WORKDIR /usr/src/app

LABEL maintainer="zycode277@gmail.com"
ENV ANIMATE_DIR=/animate

COPY . .
ENV NODE_ENV=development
RUN npm install && npm run build
ENV NODE_ENV=production

# CMD "cat package.json"
CMD ["npm", "run", "serve"]

