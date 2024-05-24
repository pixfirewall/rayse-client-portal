# Build Stage
FROM node:18-alpine as builder
ARG VITE_AUTH_USERNAME
ARG VITE_AUTH_PASSWORD
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build:web

# Production Stage
FROM nginx:alpine as production
WORKDIR /usr/local/bin
COPY --from=builder /app/dist /rayseinc
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
