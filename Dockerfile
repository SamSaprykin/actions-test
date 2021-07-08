
FROM alpine

RUN apk update && \
    apk upgrade && \
    apk add git

ADD docker-entrypoint.sh /docker-entrypoint.sh

ENTRYPOINT ["sh", "/docker-entrypoint.sh"]
