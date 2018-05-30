# centers-of-excellence
All the excellent centers


---

## Images

Images can be uploaded into the `/images/` folder:

Any image that is in the `/images/` folder can be included in a page with one of the following shortcodes.

You'll need to provide three things:
- path + namd of file — this is the path within the `/images/` folder
- caption — a clear description of the image
- alt-text — a description of the image for people who cannot see it

**Example:** `contact-center/sonny` is for the `sonny.jpg` file.

**In-line Image**
```
{% include image.html path="contact-center/sonny" alt-text="this is the alt text" caption="Sonny" %}
```

**Wide Image**
```
{% include image-wide.html path="contact-center/sonny" alt-text="this is the alt text" caption="Sonny" %}
```


## Videos

YouTube videos can be embedded in pages.

1. Copy the the `ID` of the youtube video URL
  1. Example — `https://www.youtube.com/watch?v=JcwG4iwN6Fk` the ID of this video is `JcwG4iwN6Fk`
2. Paste the `ID` into the following shortcode.

```
{% include youtube.html id="JcwG4iwN6Fk" %}
```

## PDFs

Insert links to PDFs within pages/posts like this:
 - path to PDF (needs to be within the `/pdf/` folder)
 - title of PDF

```
{% include pdf.html path="Personas.pdf" title="This is the title of the PDF" %}
```
