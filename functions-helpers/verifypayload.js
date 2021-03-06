const isNotEmptyString = x => x !== null && x !== undefined && x.length !== 0

const events = [
  {
    name: 'LunchAdded',
    check: function (x) {
      return (
        isNotEmptyString(x['organiser']) &&
        isNotEmptyString(x['establishment']) &&
        isNotEmptyString(x['date'])
      )
    }
  },
  {
    name: 'LunchUpdated',
    check: function (x) {
      return (
        isNotEmptyString(x['organiser']) &&
        isNotEmptyString(x['establishment']) &&
        isNotEmptyString(x['date']) &&
        isNotEmptyString(x['lunchId'])
      )
    }
  }
]

export default function verifyPayload (payload) {
  const eventName = payload['eventName']
  const eventType = events.find(x => x.name === eventName)
  return eventType === null || eventType === undefined
    ? false
    : eventType['check'](payload)
}
