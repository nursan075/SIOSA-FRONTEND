# Build Stage
FROM node:18-alpine

WORKDIR /app

COPY package* .
RUN npm install

COPY . .


CMD ["npm", "run", "dev", "--", "--host", "--port", "3000"]



# Production Stage
# FROM nginx:alpine

# # Copy hasil build ke nginx
# COPY --from=build /app/dist /usr/share/nginx/html

# # Expose port
# EXPOSE 80

# CMD ["nginx", "-g", "daemon off;"]
