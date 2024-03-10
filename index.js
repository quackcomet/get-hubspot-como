'use strict';

const { getHsCompany } = require('./services');

const getHubspotCompany = async (value, propertyName, hubspotApiKey, properties = ['name', 'ip_pilot_name']) => {
  try {
    if (!value) throw new Error('A value must be provided');
    if (!propertyName) throw new Error('A propertyName must be provided');
    if (!hubspotApiKey) throw new Error('A hubspotApiKey must be provided');
    if (typeof hubspotApiKey !== 'string') throw new Error('The hubspotApiKey must be a string');
    if (!Array.isArray(properties) || properties.some((el) => typeof el !== 'string'))
      throw new Error('properties must be an array of strings');
    const company = await getHsCompany(value, propertyName, hubspotApiKey, properties);
    return company;
  } catch (error) {
    console.error('error in getHubspotCompany', error);
    return;
  }
};

module.exports = { getHubspotCompany };
