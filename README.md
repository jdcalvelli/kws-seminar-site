# kws-seminar-site

A full stack web application built using React and Strapi for the Center for RISC's Seminar project in conjunction with the Khan World School and Arizona State University. In accordance with Jamstack principles, the frontend and backend are decoupled for the purpose of more modularity and maintainability. The frontend is hosted on the existing Center for RISC website (that currently uses CraftCMS/Apache2) at the endpoint [risc.uchicago.edu/seminars/](risc.uchicago.edu/seminars/). The backend, on the other hand, is hosted on a different DigitalOcean droplet utilizing PM2 and Serve, and domain routing  and LetsEncrypt integration is handled through Docker and Nginx Proxy Manager over top utilizing the domain [kws-seminar-api.com](kws-seminar-api.com).

### Tools Used
- Frontend
  - React
  - React Router
  - Axios
  - Mantine UI
  - Vite Bundler
- Backend
  - Strapi
  - DigitalOcean
  - Docker / Docker Compose
  - Nginx Proxy Mangager
  - PM2 Node Process Manager
  - ServeJS

### P.S.

I feel compelled to share that this was put together entirely from scratch in the final two weeks before my departure from the Center for RISC to pursue my MFA in Game Design at NYU!
