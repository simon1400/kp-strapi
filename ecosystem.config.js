module.exports = {
  apps : [{
    name   : "KP strapi demo",
    script : "yarn start"
  }],

  deploy : {
    production : {
      user : 'dimi',
      host : ['89.221.216.23'],
      ref  : 'origin/main',
      repo : 'git@github.com:simon1400/kp-strapi.git',
      path : '/var/www/kralovska-pece/strapi-demo',
      'post-deploy' : 'yarn && yarn build && pm2 reload ecosystem.config.js --env production',
    }
  }
};
