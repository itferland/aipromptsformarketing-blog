---
layout: default
title: Prompt Library
permalink: /library/
---

# Prompt Library

A curated collection of my highest-ROI AI prompts.

<ul>
{% for prompt in site.data.prompts %}
  <li>
    <strong>{{ prompt.title }}</strong>: {{ prompt.description }}
    [<a href="{{ prompt.url }}">Read more</a>]
  </li>
{% endfor %}
</ul>
