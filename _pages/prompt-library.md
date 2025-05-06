---
layout: default
title: Prompt Library
permalink: /prompt-library/
---
# Prompt Library

{% for prompt in site.prompts %}
- [{{ prompt.title }}]({{ prompt.url }})
{% endfor %}