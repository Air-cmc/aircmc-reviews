FROM node:12-alpine
WORKDIR /FEC
RUN npm install
COPY . .
ENV MONGOURL='mongodb://mongodb:27017/reviews'
CMD ["node", "server/index.js"]