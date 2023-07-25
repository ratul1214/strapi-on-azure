module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: 'https://strapi-on-azure-ipractest.azurewebsites.net',
  keys: ['whMD67GmaUjjntWus1/Kag==','pVEUr3VCBSn28TEiVlB+gQ==','+7Pw5AAVOAczUAJ8nGl1jg==','D88uaf4HUYmqYOOrkn6FCw==']
});
