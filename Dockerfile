FROM node:8-alpine as builder

WORKDIR /ng-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run ng build -- --prod

FROM nginx:1.15-alpine

COPY ./docker/default.conf /etc/nginx/conf.d/

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist/LearnHub /usr/share/nginx/html

COPY ./docker/entrypoint.sh /

RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh"]

CMD ["nginx", "-g", "daemon off;"]