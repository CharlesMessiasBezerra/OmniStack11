const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('ONG', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new ONG', async () => {
    const response = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "47000000000",
        city: "Rio do Sul",
        uf: "SC"
      });

      console.log(`TEST: ONG creation; ONG ID: ${response.body.id}`);

      expect(response.body).toHaveProperty('id');
      expect(response.body.id).toHaveLength(8);
  });

  it('should be able to login', async () => {
    const login = await request(app)
    .post('/ongs')
    .send({
      name: "APAD",
      email: "contato@apad.com.br",
      whatsapp: "47000000000",
      city: "Rio do Sul",
      uf: "SC"
    });

      console.log(`TEST: ONG login; ONG ID: ${login.body.id}`);
    
    const response = await request(app)
      .post('/sessions')
      .send({
        id: `${ login.body.id }`
      });

      console.log(`TEST: ONG login; ONG name: ${response.body.name}`);

      expect(response.body).toHaveProperty('name');
  });
});