FROM node:8-alpine as builder

WORKDIR /ng-app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run ng build -- --prod

FROM nginx:1.15-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /ng-app/dist/LearnHub /usr/share/nginx/html