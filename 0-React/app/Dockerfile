# Base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the desired port (change it to match your React app's port)
EXPOSE 3000

# Start the React app
CMD ["npm", "start"]

