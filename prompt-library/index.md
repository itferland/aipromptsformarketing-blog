---
layout: default
permalink: /prompt-library/
title: Prompt Library
---

# Prompt Library

<ul>
  {% for prompt in site.prompts %}
    <li>
      <a href="{{ prompt.url }}">{{ prompt.title }}</a>
    </li>
  {% endfor %}
</ul>