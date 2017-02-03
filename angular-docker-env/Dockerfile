FROM nginx

COPY dist /usr/share/nginx/html/
COPY docker/nginx-conf/ /etc/nginx/conf.d/

EXPOSE 80

CMD /bin/bash -c "envsubst < /etc/nginx/conf.d/vcloud-ui.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
