FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only package files and install dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Now copy the rest of your application
COPY . .

# Rebuild cache before build
RUN rm -rf .cache build

# Build Strapi admin panel
RUN npm run build

# Expose the port Railway uses (default is 1337 for Strapi)
EXPOSE 1337

# Start Strapi
CMD ["npm", "start"]
