import sayHello, { asyncSayHello } from '../src'

test('sayHello', () => {
  expect(sayHello()).toBe('Hello, Haz!')
  expect(sayHello('foo')).toBe('Hello, foo!')
})

test('sayHello async', async () => {
  expect(await asyncSayHello()).toBe('Hello, Haz!')
  expect(await asyncSayHello('foo')).toBe('Hello, foo!')
})
