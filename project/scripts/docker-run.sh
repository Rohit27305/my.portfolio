#!/bin/bash

# Docker run script for portfolio
set -e

echo "🚀 Starting portfolio container..."

# Stop existing container if running
docker stop rohit-portfolio 2>/dev/null || true
docker rm rohit-portfolio 2>/dev/null || true

# Run the container
docker run -d \
  --name rohit-portfolio \
  -p 3000:80 \
  --restart unless-stopped \
  rohit-portfolio:latest

echo "✅ Portfolio is running at http://localhost:3000"

# Show container status
docker ps | grep rohit-portfolio

# Show logs
echo "📋 Container logs:"
docker logs rohit-portfolio --tail 10