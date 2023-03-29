module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('URL', 'http://localhost:1337'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'seu_jwt_secreto'),
    },
    url: env('ADMIN_URL', 'https://localhost:1337/admin'),
  },
  ssl: {
    enabled: true,
    key: '/etc/letsencrypt/live/api.dianacoelho.com.br/privkey.pem',
    cert: '/etc/letsencrypt/live/api.dianacoelho.com.br/fullchain.pem',
  },
});
