# Use the official lightweight Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:21-slim

# Create and change to the app directory.
WORKDIR /usr/src/app

# Install dependencies.
COPY package*.json ./
RUN npm install --only=production

# Copy local code to the container image.
COPY . .

# Build the app.
RUN npm run build

# Install serve to serve the build folder.
RUN npm install -g serve

# Run the server.
CMD ["serve", "-s", "build", "-l", "3000"]
