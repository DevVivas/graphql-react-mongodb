FROM node:22-alpine

WORKDIR /app

RUN npm install -g pnpm@11.23.0

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

RUN pnpm install --frozen-lockfile --prod

COPY . .
