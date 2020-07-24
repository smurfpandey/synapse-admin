# Builder
FROM node:10-alpine as builder

WORKDIR /src

COPY . /src
RUN yarn --network-timeout=100000 install
RUN yarn build


# App
FROM arm32v7/nginx:latest

COPY --from=builder /src/build /app

RUN rm -rf /usr/share/nginx/html \
 && ln -s /app /usr/share/nginx/html
