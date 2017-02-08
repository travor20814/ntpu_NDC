# NTPU
# AUTHOR: Travor

FROM ubuntu:latest

MAINTAINER travor20814@gmail.com

ENV HOME /root
ENV PORT 80
ENV DEBUG NTPU_NDC:*
ENV NODE_ENV production

ADD nginx.conf /etc/nginx/conf.d/ntpundc.conf
RUN chmod 644 /etc/nginx/conf.d/ntpundc.conf
RUN mkdir -p /var/www/ntpu_NDC/build
ADD build/* /var/www/ntpu_NDC/build/
ADD index.html /var/www/ntpu_NDC/build/index.html

WORKDIR /var/www/ntpu_NDC

EXPOSE 8080

CMD nginx -g 'daemon off;'
