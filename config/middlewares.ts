const middlewares = [
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      origin: process.env.CORS_ORIGIN?.split(','),
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      headers: ['Content-Type', 'Authorization'],
      credentials: true,
    },
  },
  'strapi::poweredBy',
  'strapi::logger',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];

export default middlewares;
