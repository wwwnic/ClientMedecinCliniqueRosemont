# Stage 1: Build the Angular application
FROM node:14.20 AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:1.21.0-alpine
COPY --from=build /usr/src/app/dist/client-medecin-clinique-rosemont/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
