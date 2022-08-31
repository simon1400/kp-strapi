'use strict';

/**
 * money service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::money.money');
