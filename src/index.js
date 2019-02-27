// @flow

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const sayHello = (name = 'Haz') => `Hello, ${name}!`

export const asyncSayHello = async (name = 'Haz') =>
  Promise.resolve(`Hello, ${name}!`)

export default sayHello
