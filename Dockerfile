# Use nginx to serve the React build
FROM nginx:alpine

# Copy build files to nginx html folder
COPY build/ /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
