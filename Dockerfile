# 1️⃣ BUILD STAGE
FROM node:18-alpine AS builder

WORKDIR /app

RUN apk add --no-cache libc6-compat

COPY package.json yarn.lock ./
RUN yarn install

COPY . .
# Nettoyage de l'ancien cache Next.js (au cas où il serait copié par erreur)
RUN rm -rf .next
RUN yarn build

# 2️⃣ RUNTIME STAGE
FROM node:18-alpine AS runner

ENV NODE_ENV=production
ENV PORT=3000

WORKDIR /app
RUN apk add --no-cache libc6-compat

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./

EXPOSE 3000
CMD ["yarn", "start"]