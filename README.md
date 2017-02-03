# Angular + Docker + NGINX

This repo provides example code for the blog post [Running Angular from Docker with NGINX](https://rhgeek.github.io/angular-docker-nginx.html). 
For a full description and instructions, read the post.

## Dependencies

The example code uses apps built with [Angular-CLI](https://github.com/angular/angular-cli). 

To create Docker images and containers, you'll need [Docker](https://www.docker.com/).

## Structure

`simple-angular-nginx` provides a base Angular application with simple Dockerfile and default.conf for nginx 
to create a container that will serve up the Angular app.

`angular-nginx-proxy` provides and update conf file to proxy all calls to `/api` to another server

`angular-docker-env` provides and updated default.template and Dockerfile to pass in environment variables for the host and port for the proxy

`bogo-angular` provides code for two Angular apps to run in one container, with API proxy and environment variables.