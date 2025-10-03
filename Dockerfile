# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build || echo 'skip build'

# Runtime stage
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app .
USER node
EXPOSE 3000
CMD ["node", "src/server.js"]