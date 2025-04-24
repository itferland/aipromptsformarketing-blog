---
layout: default
title: AI Prompts for Marketing
description: "Your go-to source for ChatGPT-powered marketing prompts, tutorials, and tool reviews."
---

Welcome to **AI Prompts for Marketing**!  
Check out our latest AI-driven marketing prompts below:

- For a full collection of curated prompts, see our [Prompt Library](/library/).

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a> – {{ post.date | date: "%b %-d, %Y" }}
  </li>
{% endfor %}
TEST
</ul>
