FROM node:16-alpine3.17
WORKDIR /GuessThatSongFrontend
COPY package.json .
RUN npm install

# Set a RAM limit for the npm run start command
CMD ["sh", "-c", "node --max-old-space-size=256 $(which npm) run start"]

EXPOSE 3000
