cat << 'EOF' > Dockerfile
# Stage 1: 
FROM node:18-alpine
# Set the working directory inside the container
WORKDIR /usr/src/app
# Copy package.json and package-lock.json 
COPY package*.json ./
# Install application dependencies
RUN npm ci --only=production
COPY . .
#specified port
EXPOSE 3000
CMD ["node", "server.js"]
EOF
