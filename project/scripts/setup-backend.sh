#!/bin/bash

# Setup script for backend
set -e

echo "🚀 Setting up portfolio backend..."

# Navigate to backend directory
cd backend

# Install dependencies
echo "📦 Installing backend dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cp .env.example .env
    echo "⚠️  Please update the .env file with your email credentials!"
fi

# Make sure scripts are executable
chmod +x ../scripts/*.sh

echo "✅ Backend setup complete!"
echo ""
echo "📋 Next steps:"
echo "1. Update backend/.env with your email credentials"
echo "2. For Gmail, enable 2FA and create an App Password"
echo "3. Run 'npm run dev' in the backend directory to start development server"
echo "4. Or use Docker: 'docker-compose -f docker-compose.full.yml up'"
echo ""
echo "📧 Email setup guide:"
echo "- EMAIL_USER: Your Gmail address"
echo "- EMAIL_APP_PASSWORD: Gmail App Password (not your regular password)"
echo "- RECIPIENT_EMAIL: Where contact form emails should be sent"