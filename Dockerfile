FROM node:18-alpine

RUN apk update && apk add --no-cache git

WORKDIR /app

ARG GITHUB_BRANCH

RUN git clone https://github.com/nathsouzadev/ecommerce-admin.git --branch ${GITHUB_BRANCH}

WORKDIR /app/ecommerce-admin

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
