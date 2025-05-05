---
layout: default
title: AI Prompts for Marketing
permalink: /
description: "Your go-to source for ChatGPT-powered marketing prompts, tutorials, and tool reviews."
---
<div id='daily-content'>
{{ site.data.daily_update.content }} </div>

Welcome to **AI Prompts for Marketing**!  
Check out our latest AI-driven marketing prompt below:

{% assign latest_post = site.posts | first %}
- **{{ latest_post.title }}** – {{ latest_post.date | date: "%b %-d, %Y" }}

For a full collection of curated prompts, see our [Prompt Library](/library/).

<ul>
{% for post in site.posts offset:1 %}
  <li>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a> – {{ post.date | date: "%b %-d, %Y" }}
  </li>
{% endfor %}
</ul>
