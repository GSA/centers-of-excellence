---
layout: with-grid
title: Updates
---

# Contact Center Community Updates

    {% assign filtered_posts = site.posts | where: 'initiative', "CC" %}
    {% for post in filtered_posts%}
    {% include article-head.html show_post_excerpt = true %}
    {% endfor %}

<button onclick="btt()" id="btt"></button>

For all press inquiries, please contact [press@gsa.gov](mailto:press@gsa.gov)
