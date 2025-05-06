---
layout: default
title: AI Prompts for Marketing
---

<section class="hero">
  <h1>AI Prompts for Marketing</h1>
  <p class="tagline">A collection of AI marketing prompts, tutorials, and tool reviews.</p>
</section>

<section class="features">
  <article>
    <h2>📚 Prompt Library</h2>
    <p>Browse ready-to-use AI prompts for email, social, ads, and more →</p>
    <a class="btn" href="{{ '/library/' | relative_url }}">See Prompts</a>
  </article>

  <article>
    <h2>🛠 Tutorials</h2>
    <p>Step-by-step guides: from setting up your first AI tool to advanced workflows →</p>

    <ul class="latest-tutorials">
      {% assign latest_tutos = site.tutorials | sort: 'date' | reverse | slice: 0,2 %}
      {% for tuto in latest_tutos %}
        <li>
          <a href="{{ tuto.url | relative_url }}">{{ tuto.title }}</a>
          — {{ tuto.date | date: "%b %-d, %Y" }}
        </li>
      {% endfor %}
    </ul>

    <a class="btn" href="{{ '/tutorials/' | relative_url }}">View Tutorials</a>
  </article>

  <article>
    <h2>🔍 Tool Reviews</h2>
    <p>In-depth reviews of the latest AI marketing platforms and plugins →</p>

    <ul class="latest-reviews">
      {% assign latest_revs = site.tool_reviews | sort: 'date' | reverse | slice: 0,2 %}
      {% for rev in latest_revs %}
        <li>
          <a href="{{ rev.url | relative_url }}">{{ rev.title }}</a>
          — {{ rev.date | date: "%b %-d, %Y" }}
        </li>
      {% endfor %}
    </ul>

    <a class="btn" href="{{ '/tool-reviews/' | relative_url }}">Read Reviews</a>
  </article>
</section>

<section class="latest-posts">
  <h2>Latest from the Blog</h2>
  {% include prompt-list.html limit=3 %}
  <p><a href="/blog/">See all posts →</a></p>
</section>

<p>Welcome! Whether you need high-ROI ad copy, step-by-step AI tutorials, or unbiased reviews of the latest tools, you’ll find it here. Dive in and turn AI into your marketing secret weapon.</p>
