module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8f98222e8d8c86e100614b9341bdd254'),
  },
});
