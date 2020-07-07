FROM node:12.16

RUN apt update && \
    apt install git && \
    yarn global add gatsby-cli
