# --- BUILD STAGE ---
FROM node:24-slim AS builder

WORKDIR /app

RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

COPY package*.json .
RUN npm install

COPY . .

RUN npm run build

# --- PRODUCTION STAGE ---
FROM node:24-slim

WORKDIR /app

RUN apt-get update && apt-get upgrade -y && rm -rf /var/lib/apt/lists/*

COPY package*.json .
RUN npm install --omit=dev

COPY --from=builder /app/dist ./dist
COPY --from=builder /app/static ./static
COPY --from=builder /app/src/views ./src/views

RUN 

RUN useradd -m appuser \
    && mkdir -p /app/logs \
    && chown -R appuser:appuser /app

ENV NODE_ENV=production

USER appuser

EXPOSE 3000

CMD ["node", "dist/app.js"]