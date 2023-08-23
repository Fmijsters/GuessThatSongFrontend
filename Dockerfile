# Use the official Node.js 16 image as the base image
FROM node:16-alpine3.17

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY GuessThatSongFrontend/package.json GuessThatSongFrontend/package-lock.json ./

# Install project dependencies
RUN npm install

# COPY GuessThatSongFrontend . ---> This line copies the entire project directory into the container, but since the.json and package-lock.json package files were already copied, we don't need to copy again. Removing this line.

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"