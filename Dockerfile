FROM node:18-alpine as builder
ENV NODE_ENV=dev
USER node

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node . .
RUN ls -al
RUN yarn install --production && yarn cache clean

FROM node:18-alpine
USER node
WORKDIR /home/node/app

COPY --from=builder --chown=node /home/node/app/src ./src
COPY --from=builder --chown=node /home/node/app/public ./public
COPY --from=builder --chown=node /home/node/app/package*.json .

EXPOSE 3000
CMD ["npm", "serve"]
