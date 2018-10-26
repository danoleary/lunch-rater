exports.handler = async (event) => {
  console.log("Function `lunch-get` invoked")

  const CosmosClient = require('@azure/cosmos').CosmosClient;

  const endpoint = '';
  const masterKey = '';

  const databaseId = 'lunchrater';
  const containerId = 'events';

  const client = new CosmosClient({ endpoint: endpoint, auth: { masterKey: masterKey } });

  const querySpec = {
    query: "SELECT * FROM e"
  };

  const { result: results } =
    await client.database(databaseId).container(containerId).items.query(querySpec).toArray();

  console.log(results.length);
  console.log(results);

  const returnValue = results.length === 0 ? [] : results.map(x => JSON.stringify(x));

  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  };
}