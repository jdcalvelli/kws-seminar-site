# DOCKERFILE FOR BACKEND?
FROM node
COPY ./kws-strapi-backend
RUN npm install
CMD npm run start