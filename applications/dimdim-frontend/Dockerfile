FROM node:12.18.2-alpine AS BUILD

WORKDIR /usr/local/app

COPY . .

RUN npm install && \
    npm run build

FROM nginx:1.19-alpine

COPY nginx.conf /etc/nginx/nginx.conf

COPY --from=BUILD /usr/local/app/dist/dimdim-frontend /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]
