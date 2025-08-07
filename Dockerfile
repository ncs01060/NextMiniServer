# 1단계: build
FROM node:18 AS builder

WORKDIR /app
COPY app/ ./

RUN npm install
RUN npm run build

# 2단계: production
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app ./

ENV NODE_ENV production
EXPOSE 3000

CMD ["npm", "start"]