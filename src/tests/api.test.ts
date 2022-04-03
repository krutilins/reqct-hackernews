import supertest from 'supertest';

const API = 'https://hacker-news.firebaseio.com/v0';

describe('api', () => {
  it('get location', async () => {
    const response: { id: string } = await supertest(`${API}/item/30868263.json`)
      .get('/').set('Accept', 'application/json')
      .expect(200)
      .expect('Content-Type', /json/)
      .then((res: any) => res.body);

    expect(response.id).toBe(30868263);
  });
});
