# Use the official Node.js 16 image as the base image
FROM node:16-alpine3.17

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package.json package-lock.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory into the container
COPY . .

# Expose port 3000 for the application
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
