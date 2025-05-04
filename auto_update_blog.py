import os
import feedparser
import openai
from datetime import datetime

# Configure OpenAI API key
openai.api_key = os.getenv("OPENAI_API_KEY")

# RSS feed URLs for AI news
RSS_FEEDS = [
    "https://www.artificialintelligence-news.com/feed/",
    "https://venturebeat.com/category/ai/feed/",
    "https://www.theverge.com/rss/index.xml"
]

# Directory for blog posts
POSTS_DIR = "_posts"

# Function to fetch and summarize news
def fetch_and_summarize():
    summaries = []
    for feed_url in RSS_FEEDS:
        feed = feedparser.parse(feed_url)
        for entry in feed.entries[:3]:  # Limit to 3 articles per feed
            title = entry.title
            link = entry.link
            content = entry.summary

            # Use OpenAI to summarize the content
            response = openai.Completion.create(
                engine="text-davinci-003",
                prompt=f"Summarize this article: {content}",
                max_tokens=150
            )
            summary = response.choices[0].text.strip()
            summaries.append((title, summary, link))
    return summaries

# Function to create a markdown file for each summary
def create_blog_posts(summaries):
    for title, summary, link in summaries:
        # Generate a filename based on the current date and title
        date_str = datetime.now().strftime("%Y-%m-%d")
        filename = f"{date_str}-{title.replace(' ', '-').replace('/', '-')}.md"
        filepath = os.path.join(POSTS_DIR, filename)

        # Create the markdown content
        content = f"""---
layout: post
title: "{title}"
date: {datetime.now().isoformat()}
---

{summary}

[Read more here]({link})
"""

        # Write to the file
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)

# Main function to automate the process
def main():
    summaries = fetch_and_summarize()
    create_blog_posts(summaries)

if __name__ == "__main__":
    main()