ARG nginxVersion=1.23.2
ARG alpineVersion=3.19
ARG nodeVersion=20

# build environment
FROM node:${nodeVersion}-alpine${alpineVersion} as buildStep
WORKDIR /app
COPY . .
RUN yarn config set strict-ssl false --global
RUN yarn
RUN yarn build

# production environment
FROM nginx:${nginxVersion}
WORKDIR /data/www
RUN rm -rf ./*
COPY --from=buildStep /app/build .
COPY --from=buildStep /app/nginx.conf /etc/nginx/nginx.conf
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]


