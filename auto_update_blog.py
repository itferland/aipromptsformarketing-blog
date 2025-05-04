import os
import feedparser
import openai
from datetime import datetime
import logging
import hashlib
from slugify import slugify

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

# Updated OpenAI API call to use the latest interface
def fetch_and_summarize():
    summaries = []
    for feed_url in RSS_FEEDS:
        logging.debug(f"Fetching feed: {feed_url}")
        feed = feedparser.parse(feed_url)