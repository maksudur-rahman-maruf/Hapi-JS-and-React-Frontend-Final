FROM node:14.17.5
WORKDIR /reactapp
COPY package.json /reactapp
RUN npm install
COPY . /reactapp
CMD ["npm", "start"]
