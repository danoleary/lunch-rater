import dbclient from '../functions-helpers/dbclient'

exports.handler = async event => {
  const id = event.queryStringParameters.id

  if (id == null) {
    return {
      statusCode: 400,
      body: String('Must include id')
    }
  }

  const databaseId = 'lunchrater'
  const containerId = 'events'

  const querySpec = {
    query: `SELECT * FROM e where e.id = '${ id.toString() }'`
  }

  const { result: results } = await dbclient
    .database(databaseId)
    .container(containerId)
    .items.query(querySpec)
    .toArray()

  if (results.length === 0) {
    return {
      statusCode: 404,
      body: String('week with id could not be found')
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(results[0])
  }
}
