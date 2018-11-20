#!/bin/sh
set -e

sed -i "s|BACKEND_API_REPLACE|$BACKEND_API|g" /usr/share/nginx/html/assets/config.json

exec "$@"