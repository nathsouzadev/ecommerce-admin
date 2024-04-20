FROM node:20-alpine

RUN apk update && apk add --no-cache git

WORKDIR /app

ARG BRANCH_NAME

RUN git clone https://github.com/nathsouzadev/ecommerce-admin.git --branch ${BRANCH_NAME}

WORKDIR /app/ecommerce-admin
RUN npm install

EXPOSE 5000

RUN npm run build && npm run dev
