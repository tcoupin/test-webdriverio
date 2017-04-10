FROM node:7.8.0-alpine

WORKDIR /root

RUN apk update && \
	apk upgrade && \
	apk add python make g++ && \
	npm install

ENTRYPOINT ["/usr/local/bin/npm","test"]