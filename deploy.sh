#!/bin/bash

# Specify app name (user/folder/service)
APP_NAME="template-nodets"

# Stop service
echo "Stopping service $APP_NAME..."
systemctl stop $APP_NAME

# Pull source from GitHub
echo "Pulling code via Git..."
git pull

# Fix permissions
chown scripts:scripts -R /opt/$APP_NAME
chmod u=rwX,g=srX,o=rX -R /opt/$APP_NAME

# Build code
echo "Building project..."
npm run-script build

# Start service
echo "Starting service $APP_NAME..."
systemctl start $APP_NAME
echo "Done! Successfully deployed $APP_NAME"

exit 0