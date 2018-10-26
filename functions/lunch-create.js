exports.handler = async (event) => {
  const data = JSON.parse(event.body)
  console.log("Function `lunch-create` invoked", data)

  const CosmosClient = require('@azure/cosmos').CosmosClient;
  
  const endpoint = '';
  const masterKey = '';
  
  const databaseId = 'lunchrater';
  const containerId = 'events';
  
  const client = new CosmosClient({ endpoint: endpoint, auth: { masterKey: masterKey } });

  const { item } = await client.database(databaseId).container(containerId).items.create(data);

  return  {
      statusCode: 200,
      body: JSON.stringify(data)
  };
}