const server = require('../src/app')

test('debería ser una funcion', async () => {
    expect(typeof server).toBe('function')
})

test('debería ser una funcion', async () => {
    expect(typeof server.use).toBe('function')
})

test('debería ser string', async () => {
    expect(typeof server.name).toBe('string')
})