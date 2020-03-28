const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');

describe('Incident', () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it('should be able to create a new incident', async () => {
    const login = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "47000000000",
        city: "Rio do Sul",
        uf: "SC"
      });

      console.log(`TEST: Incident creation; ONG ID: ${login.body.id}`);

      const auth = login.body.id;

      const response = await request(app)
      .post('/incidents')
      .set('authorization', auth)
      .send({
        title: "Caso teste",
        description: "Lorem ipsum",
        value: 120,
      });

      console.log(`TEST: Incident creation; Incident ID: ${response.body.id}`);

      expect(response.body).toHaveProperty('id');
  });

  it('should be able to delete an incident', async () => {
    const login = await request(app)
      .post('/ongs')
      .send({
        name: "APAD",
        email: "contato@apad.com.br",
        whatsapp: "47000000000",
        city: "Rio do Sul",
        uf: "SC"
      });

      console.log(`TEST: Incident delete; ONG ID: ${login.body.id}`);

      const auth = login.body.id;

      const case1 = await request(app)
      .post('/incidents')
      .set('authorization', auth)
      .send({
        title: "Caso teste 1",
        description: "Lorem ipsum",
        value: 120,
      });

      console.log(`TEST: Incident delete; Incident 1 ID: ${case1.body.id}`);

      const case2 = await request(app)
      .post('/incidents')
      .set('authorization', auth)
      .send({
        title: "Caso teste 4",
        description: "Lorem ipsum",
        value: 150,
      });

      console.log(`TEST: Incident delete; Incident 2 ID: ${case2.body.id}`);

      const case3 = await request(app)
      .post('/incidents')
      .set('authorization', auth)
      .send({
        title: "Caso teste 3",
        description: "Lorem ipsum",
        value: 180,
      });

      console.log(`TEST: Incident delete; Incident 3 ID: ${case3.body.id}`);

      const response = await request(app)
      .delete(`/incidents/${case2.body.id}`)
      .set('authorization', auth)
      .send();

      expect(response.status).toBe(204);
  });
});