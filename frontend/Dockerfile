FROM node:16-alpine

WORKDIR /app

# Copy app files
COPY package.json ./
COPY package-lock.json ./
COPY . .

# Install dependencies
RUN npm install

# Copy ENV file
COPY .env .

# Set environment variables from ENV file
RUN cat .env | xargs -n 2 -o | sed 's/^/export /' > .env.sh
RUN source .env.sh

# Build app
RUN npm run build

# Expose port 443
EXPOSE 80

# Start server
CMD ["npm", "start"]
