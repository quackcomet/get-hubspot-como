# get-hubspot-company

## Gettin started

1. Install the package

```
npm i get-hubspot-company
```

2. How to use it in your file (ex: paste it in an index.js file and then run node index.js):

```
const { getHubspotCompany } = require('get-hubspot-company');

const asyncFunction = async () => {
  const hubspotCompany = await getHubspotCompany(value, propertyName, token, properties);
};

asyncFunction();
```

3. Additional information:

- The value parameter refers to the value you want to filter the company by.
- The propertyName paratemer refers to the property you want to filter the company by.
- The properties paratemer refers to the properties you want to be in your response.
- ex: I want to filter a company by its name with the value of 'Apple' that returns its 'products' ->  getHubspotCompany('Apple', 'name', yourToken, ['products'])
- You can provide an array of strings with the company's properties you wish to have in the response from Hubspot. Otherwise default properties will be returned.

## Built with

- [Node.js](https://nodejs.org/en)
- [Axios](https://axios-http.com/docs/intro)

## Company

IP Pilot:

- [Website](https://www.ip-pilot.com/en/)
- [e-mail](info@ip-pilot.com)
