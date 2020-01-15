import request from 'supertest';
import app from '../app';
describe('Testing The App with trying some possible requests for CTR API', () => {
  test('Get all Printers for Country with id 1 Germany', async () => {
    const country_id = 1;
    const res = await request(app).get(`/countries/${country_id}/printers`);
    expect(res.body).not.toBe(null);
    expect(res.statusCode).toBe(200);
  });

  test('Get all Printers for Country with id 2 Italy', async () => {
    const country_id = 2;
    const res = await request(app).get(`/countries/${country_id}/printers`);
    expect(res.body).not.toBe(null);
    expect(res.statusCode).toBe(200);
  });

  test('Get all Printers for Country with id 3 France', async () => {
    const country_id = 3;
    const res = await request(app).get(`/countries/${country_id}/printers`);
    expect(res.body).not.toBe(null);
    expect(res.statusCode).toBe(200);
  });

  test('Get all Printers for Country with id 4 Austria', async () => {
    const country_id = 4;
    const res = await request(app).get(`/countries/${country_id}/printers`);
    expect(res.body).not.toBe(null);
    expect(res.statusCode).toBe(200);
  });

  test('Create an order', async () => {
    const res = await request(app)
      .post(`/orders`)
      .send({ product_id: 1, destination: 1 });
    expect(res.body.order).not.toBe(null); // order created
    expect(res.statusCode).toBe(200);
  });
});
