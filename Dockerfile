# 1단계: Build
FROM node:18 AS builder

WORKDIR /app

# 현재 디렉토리 전체를 복사
COPY . .

RUN npm install
RUN npm run build

# 2단계: Production 이미지
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000

CMD ["npm", "start"]