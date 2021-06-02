FROM jekyll/jekyll

COPY . /srv/jekyll

RUN chmod +rwx /srv/jekyll/Gemfile.lock && \
    chmod +rwx /srv/jekyll/Gemfile

EXPOSE 4000
CMD ["jekyll", "serve", "--watch", "--trace", "--incremental", "--host 0.0.0.0"]
