# centers-of-excellence
All the excellent centers


---

## Images

Images can be uploaded into the `/images/` folder:

Any image that is in the `/images/` folder can be included in a page with one of the following shortcodes.

You'll need to provide three things:
- path + filename — this is the path within the `/images/` folder
- caption — a clear description of the image
- alt-text — a description of the image for people who cannot see it


**In-line Image**
```
{% include image.html path="contact-center/sonny.png" alt-text="this is the alt text" caption="Sonny" %}
```

**Wide Image**
```
{% include image-wide.html path="contact-center/sonny.png" alt-text="this is the alt text" caption="Sonny" %}
```
