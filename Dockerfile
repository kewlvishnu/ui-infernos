FROM node:12.2.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

# install and cache app dependencies
COPY package.json /app/package.json
RUN npm install --silent --save history
RUN npm install react-scripts@3.0.1 -g --silent
COPY . /app
RUN npm install react
RUN npm run build

# start app
CMD ["npm", "start"]
