# Use a base image with Node.js
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Install TypeScript globally
RUN npm install -g typescript

# Copy the rest of the application files
COPY . .

# Build the TypeScript code
RUN npm run build

# Expose the application port (assuming your app runs on port 3000)
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
