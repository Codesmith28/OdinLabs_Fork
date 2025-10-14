## Build stage: compile TypeScript to JS
FROM node:22-alpine AS builder
WORKDIR /usr/src/app

# Install deps
COPY package*.json ./
RUN npm install --production=false

# Copy source and build
COPY tsconfig.json ./
COPY src ./src
RUN npm run build

## Runtime stage: run the compiled app
FROM node:22-alpine AS runner
WORKDIR /usr/src/app

ENV NODE_ENV=production

# Only install production dependencies
COPY package*.json ./
RUN npm install --omit=dev && npm cache clean --force

# Copy built files from builder
COPY --from=builder /usr/src/app/dist ./dist

# Expose the server port
EXPOSE 8004

# Start the server
CMD ["node", "dist/index.js"]
