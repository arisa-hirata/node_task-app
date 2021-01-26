const request = require('supertest');
const app = require('../src/app');

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: '123',
        email: '123@email.com',
        password: 'Red12345!'
    }).expect(201)
});
