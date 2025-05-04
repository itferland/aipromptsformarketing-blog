import os
import feedparser
import openai
from datetime import datetime
import logging
import hashlib
from slugify import slugify
from bs4 import BeautifulSoup
import requests

# Configure OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# Configure logging
logging.basicConfig(level=logging.DEBUG, filename="debug.log", filemode="w", format="%(asctime)s - %(levelname)s - %(message)s")

# RSS feed URLs for AI news
RSS_FEEDS = [
    "https://www.artificialintelligence-news.com/feed/",
    "https://venturebeat.com/category/ai/feed/",
    "https://www.theverge.com/rss/index.xml"
]

# Directory for blog posts
POSTS_DIR = "_posts"

# Generate a unique ID for each article based on its link or guid
def generate_unique_id(entry):
    unique_string = entry.get('guid', entry.link)
    return hashlib.sha256(unique_string.encode('utf-8')).hexdigest()

# Check if the article's unique ID already exists in the posts
def is_duplicate_id(unique_id):
    for filename in os.listdir(POSTS_DIR):
        if unique_id in filename:
            return True
    return False

# Update filename sanitization to use slugify
def create_filename(title, unique_id):
    slug = slugify(title)
    date_str = datetime.now().strftime("%Y-%m-%d")
    return f"{date_str}-{slug}-{unique_id[:8]}.md"

# Fetch the full article content using BeautifulSoup
def fetch_full_article(url):
    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, 'html.parser')
        # Extract the main content (adjust selector as needed)
        article_body = soup.find('article') or soup.find('div', class_='content')
        return article_body.get_text(strip=True) if article_body else None
    except Exception as e:
        logging.error(f"Error fetching full article from {url}", exc_info=True)
        return None

# Add fallback for missing feed title
def fetch_and_summarize():
    summaries = []
    for feed_url in RSS_FEEDS:
        print(f"\n-- FETCHING {feed_url} --")
        feed = feedparser.parse(feed_url)
        count = len(feed.entries)
        print(f"Found {count} entries")

        for entry in feed.entries[:3]:
            title = entry.get("title", "<no title>")
            link  = entry.get("link", "<no link>")
            print(f"  • Entry: {title}")
            summaries.append((title, entry.get("summary", ""), link))
    return summaries

# Add a dry-run mode to the script
def create_blog_posts(summaries, dry_run=False):
    for title, _, link in summaries:
        slug     = slugify(title)
        date_str = datetime.now().strftime("%Y-%m-%d")
        filename = f"{date_str}-{slug}.md"
        filepath = os.path.join(POSTS_DIR, filename)

        # Log decision path
        if os.path.exists(filepath):
            print(f"[SKIP     ] {filename} (already exists)")
        else:
            print(f"[WRITE-DRY] {filename}")

# Call the function with dry-run mode enabled
if __name__ == "__main__":
    summaries = fetch_and_summarize()
    create_blog_posts(summaries, dry_run=True)