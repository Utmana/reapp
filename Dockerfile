FROM nginx
EXPOSE 80
ADD ./build /usr/share/nginx/html
