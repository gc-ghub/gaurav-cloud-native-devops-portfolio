# Stage 1: Build the frontend using full dependency install
FROM node:20-slim AS builder

WORKDIR /app

# Copy package.json and lock file
COPY package*.json ./

# Install ALL dependencies (including dev dependencies)
RUN npm install

# Copy the rest of the app code
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve the built app
FROM node:20-slim

WORKDIR /app

# Only copy built artifacts and necessary files
COPY --from=builder /app ./

EXPOSE 3000

CMD ["npm", "start"]
