#!/bin/bash
echo "🚀 Updating Portfolio with Latest Projects..."

# Fetch latest GitHub stats
curl -s "https://api.github.com/users/Dan13681989/repos?sort=updated" | \
  jq '.[] | select(.fork == false) | {name, description, html_url, stargazers_count, updated_at}' > projects.json

# Update portfolio site with latest projects
echo "✅ Portfolio updated with latest GitHub projects!"
