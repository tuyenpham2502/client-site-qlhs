FROM imbios/bun-node:18-slim AS deps
ARG DEBIAN_FRONTEND=noninteractive
EXPOSE 17012

WORKDIR /app
RUN pwd
RUN ls -la

# Install dependencies based on the preferred package manager
COPY package.json bun.lockb ./
RUN pwd
RUN ls -la
RUN bun install --frozen-lockfile
RUN rm -rf .next
RUN pwd
RUN ls -la
# Build the app
FROM deps AS builder
WORKDIR /app
COPY . .
RUN bun run build:dev

# CMD ["bun", "run", "start"]

