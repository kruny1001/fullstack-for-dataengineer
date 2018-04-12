FROM r-base

MAINTAINER Kevin Son "kruny1001@gmail.com"
RUN apt-get update -qq && apt-get install -y \
  git-core \
  libcurl4-openssl-dev \
  libxml2-dev \
  libxml2  \
  libssl-dev \
  libudunits2-dev \
  libmariadb-client-lgpl-dev

COPY . /usr/local/src/myscripts
WORKDIR /usr/local/src/myscripts
RUN mkdir output

RUN /bin/bash -c 'source ./install.sh'
CMD R --save
