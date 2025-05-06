---
layout: default
title: Prompt Library
permalink: /prompt-library/
---

# Prompt Library

<ul>
  {% for prompt in site.prompts %}
    <li>
      <a href="{{ prompt.url }}">{{ prompt.title }}</a>
    </li>
  {% endfor %}
</ul>