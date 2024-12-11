FROM node:20-alpine

ENV NODE_ENV="production"

ARG ROOT_DIR=/var/www/

# Update and Install deps
RUN apk update && apk upgrade

# Create destination directory
RUN mkdir -p $ROOT_DIR
RUN chmod -R 777 $ROOT_DIR
WORKDIR $ROOT_DIR

# Copy & build source files
ADD . $ROOT_DIR

# Expose 3004 on container
EXPOSE 3004

RUN npm install --force --production

ENTRYPOINT ["/bin/sh", "entrypoint.sh"]
