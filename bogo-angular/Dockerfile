FROM nginx

COPY side-angular/dist /usr/share/nginx/html/sideapp
COPY main-angular/dist /usr/share/nginx/html
COPY docker/nginx-conf /etc/nginx/conf.d/

EXPOSE 80

CMD /bin/bash -c "envsubst < /etc/nginx/conf.d/default.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"