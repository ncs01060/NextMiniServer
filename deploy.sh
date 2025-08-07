#!/bin/bash
echo "코드 업데이트 중..."
git pull origin main
echo "도커 재빌드 중..."
docker compose build
docker compose up -d