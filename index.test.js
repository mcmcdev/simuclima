// index.test.js
const request = require('supertest');
const app = require('./index');

describe('GET /', () => {
  it('Debería responder con status 200 y el texto "¡Hola, mundo!"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('¡Hola, mundo!');
  });
});
