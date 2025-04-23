---
layout: home
title: AI Prompts for Marketing
---

Welcome to **AI Prompts for Marketing**!  
Check out our latest AI-driven marketing prompts below.

{% for post in site.posts %}
- [{{ post.title }}]({{ post.url }}) — {{ post.date | date: "%b %-d, %Y" }}
{% endfor %}
