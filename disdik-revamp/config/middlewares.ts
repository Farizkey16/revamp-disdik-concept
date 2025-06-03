export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      headers: ['Content-Type', 'Authorization', 'Accept', 'user-token'], // <--- YOU NEED TO ADD 'user-token' HERE
      origin: ['http://localhost:3000'], // <--- Make sure your frontend origin is correct
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'], // <--- Ensure all methods you use are allowed
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];