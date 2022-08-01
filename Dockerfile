# DOCKERFILE FOR BACKEND?
FROM node
COPY ./kws-strapi-backend /app
RUN npm install
CMD npm run start