import verifyPayload from '../functions-helpers/verifypayload'

const validLunchAddedPayload = {
  eventName: 'LunchAdded',
  organiser: 'Dan',
  establishment: 'The pub',
  date: '2018-09-09'
}

const validLunchUpdatedPayload = {
  eventName: 'LunchUpdated',
  organiser: 'Dan',
  establishment: 'The pub',
  date: '2018-09-09',
  lunch_id: '3c67180e-70d1-41d9-b38e-903fcc849cc2'
}

test('verify fails if event name is null', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['eventName'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if event name is not valid', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['eventName'] = 'some new event'
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify passes if event name is valid', () => {
  const result = verifyPayload(validLunchAddedPayload)
  expect(result).toBe(true)
})

// lunch added tests
test('verify lunch added fails if organiser is null', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['organiser'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch added fails if organiser is undefined', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['organiser'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify fails if organiser is null', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['organiser'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch added fails if organiser is empty string', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['organiser'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch added fails if establishment is null', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['establishment'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch added fails if establishment is undefined', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['establishment'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch added fails if establishment is empty string', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['establishment'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch added fails if establishment is null', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['establishment'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch added fails if date is undefined', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['date'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch added fails if date is empty string', () => {
  const event = Object.assign({}, validLunchAddedPayload)
  event['date'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

// lunch updated tests
test('verify lunch updated fails if organiser is null', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['organiser'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if organiser is undefined', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['organiser'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if organiser is null', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['organiser'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if organiser is empty string', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['organiser'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if establishment is null', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['establishment'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if establishment is undefined', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['establishment'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if establishment is empty string', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['establishment'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if establishment is null', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['establishment'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if date is undefined', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['date'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if date is empty string', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['date'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if lunch_id is null', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['lunchId'] = null
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if lunch_id is undefined', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['lunchId'] = undefined
  const result = verifyPayload(event)
  expect(result).toBe(false)
})

test('verify lunch updated fails if lunch_id is empty string', () => {
  const event = Object.assign({}, validLunchUpdatedPayload)
  event['lunchId'] = ''
  const result = verifyPayload(event)
  expect(result).toBe(false)
})
