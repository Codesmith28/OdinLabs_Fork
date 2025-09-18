FROM node:22-alpine
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source
COPY . .

# Build with Vite (VITE_* envs are injected at build time)
ARG VITE_SERVER_URL
ARG VITE_SOCKET_URL
ARG VITE_RAPIDAPI_URL
ARG VITE_RAPIDAPI_HOST
ARG VITE_RAPIDAPI_KEY
ENV VITE_SERVER_URL=${VITE_SERVER_URL}
ENV VITE_SOCKET_URL=${VITE_SOCKET_URL}
ENV VITE_RAPIDAPI_URL=${VITE_RAPIDAPI_URL}
ENV VITE_RAPIDAPI_HOST=${VITE_RAPIDAPI_HOST}
ENV VITE_RAPIDAPI_KEY=${VITE_RAPIDAPI_KEY}

RUN npm run build

# Expose Vite preview port
EXPOSE 8080

# Serve the built app using Vite preview
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8080"]
