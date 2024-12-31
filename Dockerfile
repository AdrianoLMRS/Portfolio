# Node:18-alpine as base img
FROM node:18-alpine

# Work directory
WORKDIR /app

# Copy files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci

# Copy files
COPY . .

# Build app
RUN npm run build

# Nginx img
FROM nginx:alpine

# Copy Build files for Nginx
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose PORT:80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]