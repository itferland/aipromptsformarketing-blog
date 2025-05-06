---
layout: default
title: Tutorials
permalink: /tutorials/
---

# Tutorials

<ul>
  {% for tut in site.tutorials %}
    <li>
      <a href="{{ tut.url }}">{{ tut.title }}</a> — {{ tut.date | date: "%b %-d, %Y" }}
    </li>
  {% endfor %}
</ul>