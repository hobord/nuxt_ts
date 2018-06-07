FROM node:8.9-alpine

COPY . /usr/src/app/

RUN npm install

# Build
RUN npm run build 

EXPOSE 3000
CMD [ "npm", "start" ]