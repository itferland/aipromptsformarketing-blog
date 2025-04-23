---
layout: default
title: AI Prompts for Marketing
---

Welcome to **AI Prompts for Marketing**!  
Check out our latest AI‐driven marketing prompts below:

<ul>
{% for post in site.posts %}
  <li>
    <a href="{{ post.url }}">{{ post.title }}</a>
    – {{ post.date | date: "%b %-d, %Y" }}
  </li>
{% endfor %}
</ul>
