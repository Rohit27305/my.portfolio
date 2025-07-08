#!/bin/bash

# Docker build script for portfolio
set -e

echo "🐳 Building Docker image for portfolio..."

# Build the image
docker build -t rohit-portfolio:latest .

echo "✅ Docker image built successfully!"

# Optional: Tag for different environments
docker tag rohit-portfolio:latest rohit-portfolio:$(date +%Y%m%d-%H%M%S)

echo "🏷️  Image tagged with timestamp"

# Show image info
docker images | grep rohit-portfolio

echo "🚀 Ready to run with: docker run -p 3000:80 rohit-portfolio:latest"