import dbclient from '../functions-helpers/dbclient'
import verifyPayload from '../functions-helpers/verifypayload'

exports.handler = async event => {
  const data = JSON.parse(event.body)

  const dataIsValid = verifyPayload(data)
  console.log(dataIsValid)

  if (!dataIsValid) {
    return {
      statusCode: 400,
      body: String('Invalid payload')
    }
  }

  const databaseId = 'lunchrater'
  const containerId = 'events'

  await dbclient
    .database(databaseId)
    .container(containerId)
    .items.create(data)

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
