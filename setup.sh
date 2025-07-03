#!/usr/bin/env bash
set -e

# Install Node.js dependencies
npm install rss-parser node-fetch

# Ensure scripts directory exists
mkdir -p scripts

# Add npm scripts if missing
update_package_json() {
  local key="$1" value="$2"
  if ! jq -e ".scripts | has(\"$key\")" package.json >/dev/null; then
    tmp=$(mktemp)
    jq ".scripts[\"$key\"] = \"$value\"" package.json > "$tmp" && mv "$tmp" package.json
  fi
}

update_package_json "fetch-posts" "node scripts/fetch-news.js"
update_package_json "test-fetch" "node scripts/test-fetch.js"
update_package_json "create-mock-posts" "node scripts/create-mock-posts.js"

# Run tests
npm run test-fetch || true

# Generate mock posts
node scripts/create-mock-posts.js

# Launch Astro dev server
npm run dev
