FROM alpine

RUN apk update && \
    apk upgrade && \
    apk add git

ADD entrypoint.sh /entrypoint.sh

ENTRYPOINT ["sh", "/docker-entrypoint.sh"]