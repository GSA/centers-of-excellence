---
layout: with-grid
title: Updates
---

# Latest Updates

Every month, our team posts updates on our work, best practices or progress. Please visit this page often to see the latest information on the Centers of Excellence.
{: .intro}

{% for post in site.posts %}
     {% if post.initiative != "Artificial Intelligence" and post.initiative != "Cloud Adaption" and post.initiative != "Contact Center" and post.initiative != "Customer Experience" and post.initiative != "Data and Analytics" and post.initiative != "Infrastructure Optimization" %}
        {% include article-head.html post=post show_initiative=true %}
     {% endif %}
{% endfor %}

<button onclick="btt()" id="btt"></button>

For all press inquiries, please contact [press@gsa.gov](mailto:press@gsa.gov)
