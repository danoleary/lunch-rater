import dbclient from '../functions-helpers/dbclient'

exports.handler = async event => {
  const databaseId = 'lunchrater'
  const containerId = 'events'

  const querySpec = {
    query: 'SELECT * FROM e'
  }

  const { result: results } = await dbclient
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .toArray()

  const returnValue =
    results.length === 0 ? [] : results.map(x => JSON.stringify(x))

  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  }
}
