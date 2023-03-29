module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('URL', env.API),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'seu_jwt_secreto'),
    },
    url: env('ADMIN_URL', `${env.API}/admin`),
  },
  ssl: {
    enabled: true,
    key: `/etc/letsencrypt/live/${env.API}/privkey.pem`,
    cert: `/etc/letsencrypt/live/${env.API}/fullchain.pem`,
  },
});

