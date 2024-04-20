FROM node:20-alpine

RUN apk update && apk add --no-cache git

WORKDIR /app

ENV BRANCH_NAME=${BRANCH_NAME}

RUN git clone https://github.com/nathsouzadev/ecommerce-admin.git -b $BRANCH_NAME

WORKDIR /app/ecommerce-admin
RUN npm install

EXPOSE 5000

RUN npm run build && npm run dev
