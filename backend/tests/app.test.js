const request = require('supertest');
const app = require('../src/server');

describe('Cidade Limpa API', () => {
  test('Deve retornar status online no health check', async () => {
    const response = await request(app).get('/api/health');

    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('online');
    expect(response.body.project).toBe('Cidade Limpa');
  });

  test('Deve cadastrar uma nova ocorrência', async () => {
    const response = await request(app)
      .post('/api/occurrences')
      .send({
        citizen_name: 'Teste Usuário',
        type: 'Lixo',
        description: 'Lixo acumulado em via pública',
        location: 'Eusébio CE'
      });

    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.status).toBe('Aberta');
  });

  test('Deve retornar erro ao cadastrar ocorrência sem dados obrigatórios', async () => {
    const response = await request(app)
      .post('/api/occurrences')
      .send({
        citizen_name: 'Teste'
      });

    expect(response.statusCode).toBe(400);
    expect(response.body.error).toBe(true);
  });
});