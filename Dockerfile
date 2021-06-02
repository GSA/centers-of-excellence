FROM ruby:2.6.3

# set locales
RUN  apt-get update >/dev/null && \
     apt-get install -y locales >/dev/null && \
     echo "en_US UTF-8" > /etc/locale.gen  && \
     locale-gen en_US.UTF-8  && \
     gem install bundler -v 1.17.1 && \
     export LANG=en_US.UTF-8  && \
     export LANGUAGE=en_US.UTF-8  && \
     export LC_ALL=en_US.UTF-8

RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && \
apt-get install -y nodejs

COPY Gemfile Gemfile.lock /app/
COPY . /app

RUN cd /app && gem install bundler && bundle install

# Per OCP Docs, it's a best practice to have root owernship
# of files that require RWX:
RUN chgrp -R 0 /app && \
    chmod -R g=u /app && \
    chmod +x /app/serve

WORKDIR /app
EXPOSE 4000

# The ENTRYPOINT is what ends up requiring `anyuid` or `privledged` container SCC:
# ENTRYPOINT ["ruby", "/app/docker_entrypoint.rb"]
CMD ["./serve"]
