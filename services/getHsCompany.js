'use strict';

const { axiosFetcher } = require('axios-fetcher');

const getHsCompany = async (value, propertyName, token, properties) => {
  const raw = JSON.stringify({
    filterGroups: [{ filters: [{ value, propertyName, operator: 'EQ' }] }],
    properties: [propertyName, ...properties],
  });

  const requestOptions = {
    url: `https://api.hubapi.com/crm/v3/objects/companies/search`,
    method: 'POST',
    headers: { 'content-type': 'application/json', Authorization: `Bearer ${token}` },
    data: raw,
    redirect: 'follow',
  };

  const response = await axiosFetcher(requestOptions);

  if (response && response.total > 0) {
    const company = response.results.filter((el) => el.properties[propertyName] === String(value))[0];
    return company;
  }
  return false;
};

module.exports = { getHsCompany };
