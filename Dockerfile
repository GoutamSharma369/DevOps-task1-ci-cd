cat << 'EOF' > Dockerfile
# Stage 1: Use an official Node.js runtime image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json first
COPY package*.json ./

# Install application dependencies for production only
RUN npm ci --only=production

# Copy the rest of the application source code
COPY . .

# Inform Docker that the container listens on the specified port
EXPOSE 3000

# Define the command to run the application when the container starts
CMD ["node", "server.js"]
EOF
