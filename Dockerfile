# Use Alpine for smaller image; use Debian if you need better native support
FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci --omit=dev

# Copy rest of your app
COPY . .

# Clean cache and build
RUN rm -rf .cache build
RUN npm run build

EXPOSE 1337

CMD ["npm", "start"]
