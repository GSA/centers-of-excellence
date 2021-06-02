FROM jekyll/jekyll

COPY . /srv/jekyll

RUN chgrp -R 0 /srv/jekyll && \
    chmod -R g=u /srv/jekyll

EXPOSE 4000
CMD ["jekyll", "serve", "--watch", "--trace", "--incremental", "--host 0.0.0.0", "--config=_config.yaml"]
