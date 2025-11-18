#!/bin/bash

# Define source and destination directories
CLIENT_DIR="${CLIENT_DIR:-$HOME/OdinLabsRepo/OdinLabs_Fork/client}"
CLIENT_DIST_DIR="${CLIENT_DIST_DIR:-$CLIENT_DIR/dist}"
CHEATSHEETS_DIR="${CHEATSHEETS_DIR:-$HOME/OdinLabsRepo/OdinLabs_Fork/cheatsheets}"
WWW_DIR="${WWW_DIR:-/var/www/html}"

# Run build in client folder
echo "Running build in $CLIENT_DIR..."
cd "$CLIENT_DIR" || {
    echo "Error: Cannot cd into $CLIENT_DIR"
    exit 1
}

if ! npm run build; then
    echo "Error: npm run build failed."
    exit 1
fi

# Check if source directories exist before copying
if [ ! -d "$CLIENT_DIST_DIR" ]; then
    echo "Error: CLIENT_DIST_DIR '$CLIENT_DIST_DIR' does not exist."
    exit 1
fi

if [ ! -d "$CHEATSHEETS_DIR" ]; then
    echo "Error: CHEATSHEETS_DIR '$CHEATSHEETS_DIR' does not exist."
    exit 1
fi

# Copy built files and cheatsheets
echo "Copying client dist → $WWW_DIR..."
sudo cp -r "$CLIENT_DIST_DIR"/* "$WWW_DIR"/

echo "Copying cheatsheets → $WWW_DIR..."
sudo cp -r "$CHEATSHEETS_DIR"/. "$WWW_DIR"/

# Restart nginx
echo "Restarting nginx..."
sudo systemctl restart nginx

echo "✅ Deployment complete!"
