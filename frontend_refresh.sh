# Define source and destination directories
CLIENT_DIST_DIR="${CLIENT_DIST_DIR:-$HOME/OdinLabsRepo/OdinLabs_Fork/client/dist}"
CHEATSHEETS_DIR="${CHEATSHEETS_DIR:-$HOME/OdinLabsRepo/OdinLabs_Fork/cheatsheets}"
WWW_DIR="${WWW_DIR:-/var/www/html}"

# Check if source directories exist before copying
if [ ! -d "$CLIENT_DIST_DIR" ]; then
    echo "Error: CLIENT_DIST_DIR '$CLIENT_DIST_DIR' does not exist."
    exit 1
fi

if [ ! -d "$CHEATSHEETS_DIR" ]; then
    echo "Error: CHEATSHEETS_DIR '$CHEATSHEETS_DIR' does not exist."
    exit 1
fi

sudo cp -r "$CLIENT_DIST_DIR"/* "$WWW_DIR"/
sudo cp -r "$CHEATSHEETS_DIR"/. "$WWW_DIR"/
sudo systemctl restart nginx
