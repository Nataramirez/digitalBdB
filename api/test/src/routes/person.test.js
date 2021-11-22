const { request, response } = require('express');
const router = require('../../../src/routes/person');

test('debería ser una funcion', async () => {
    expect(typeof router.post).toBe('function')
})

test('debería contener json como tipo header', async () => {
    const response = await request(router).post("/person").send({
        name: 'name',
        lastName: 'lastName',
        birth: 'birth'
    })
    expect(response.header[contentType]).toEqual(expect.stringContaining("json"))
})