---
layout: with-grid
title: Updates
---

# Innovation Adoption Community Updates

    {% assign filtered_posts = site.posts | where: 'initiative', "IA" %}
    {% for post in filtered_posts%}
    {% include article-head.html show_post_excerpt = true %}
    {% endfor %}

<button onclick="btt()" id="btt"></button>

For all press inquiries, please contact [press@gsa.gov](mailto:press@gsa.gov)
