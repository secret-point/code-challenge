# Use the official Node.js 14 image.
# https://hub.docker.com/_/node
FROM node:21
COPY package*.json ./

# Install production dependencies.
RUN npm install

# Copy local code to the container image.
COPY . .

RUN npm run build

# Run the web service on container startup.
CMD [ "node", "./dist/server.js" ]
