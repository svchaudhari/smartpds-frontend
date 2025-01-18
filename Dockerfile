# Stage 1: Build the React app
FROM node:23-alpine3.20 AS build
WORKDIR /app

# Leverage caching by installing dependencies first
COPY package*.json ./

# Clear npm cache and upgrade npm
RUN npm cache clean --force
RUN npm install -g npm@latest

# Install dependencies with additional flags for compatibility
RUN npm install --legacy-peer-deps --verbose

# Copy the rest of the application code and build for production
RUN npm run build

# Stage 2: Development environment
FROM node:23-alpine3.20 AS development
WORKDIR /app

# Install dependencies again for development

RUN npm install

# Copy the full source code
#COPY . ./

# Expose port for the development server
EXPOSE 3000
CMD ["npm", "start"]

# Stage 3: Production environment
FROM nginx:alpine AS production

# Copy the production build artifacts from the build stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose the default NGINX port
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
