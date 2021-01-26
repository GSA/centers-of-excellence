---
layout: with-grid
title: Updates
---

# Latest Updates

Every month, our team posts updates on our work, best practices or progress. Please visit this page often to see the latest information on the Centers of Excellence.
{: .intro}

{% for post in site.posts %}
    {% include article-head.html post=post show_initiative=true %}
{% endfor %}

<button onclick="btt()" id="btt"></button>

For all press inquiries, please contact [press@gsa.gov](mailto:press@gsa.gov)
