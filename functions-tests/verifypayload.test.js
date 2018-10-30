import verifyPayload from '../functions-helpers/verifypayload'

const validPayload = {
  eventName: 'LunchAdded',
  organiser: 'Dan',
  establishment: 'The pub',
  date: '2018-09-09'
}

test('verify fails if event name is null', () => {
  const event = Object.assign({}, validPayload)
  event['eventName'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if event name is not valid', () => {
  const event = Object.assign({}, validPayload)
  event['eventName'] = 'some new event'
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify passes if event name is valid', () => {
  const result = verifyPayload(validPayload)
  expect(result).toBe(true)
})

// lunch added tests
test('verify fails if organiser is null', () => {
  const event = Object.assign({}, validPayload)
  event['organiser'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if organiser is undefined', () => {
  const event = Object.assign({}, validPayload)
  event['organiser'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if organiser is null', () => {
  const event = Object.assign({}, validPayload)
  event['organiser'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if organiser is empty string', () => {
  const event = Object.assign({}, validPayload)
  event['organiser'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if establishment is null', () => {
  const event = Object.assign({}, validPayload)
  event['establishment'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if establishment is undefined', () => {
  const event = Object.assign({}, validPayload)
  event['establishment'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if establishment is empty string', () => {
  const event = Object.assign({}, validPayload)
  event['establishment'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if establishment is null', () => {
  const event = Object.assign({}, validPayload)
  event['establishment'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if date is undefined', () => {
  const event = Object.assign({}, validPayload)
  event['date'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if date is empty string', () => {
  const event = Object.assign({}, validPayload)
  event['date'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})
