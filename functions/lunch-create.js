import dbclient from '../functions-helpers/dbclient'
import verifyPayload from '../functions-helpers/verifypayload'
const uuidv1 = require('uuid/v1')

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

  data['lunchId'] = uuidv1()

  await dbclient
    .database(databaseId)
    .container(containerId)
    .items.create(data)

  return {
    statusCode: 200,
    body: JSON.stringify(data)
  }
}
