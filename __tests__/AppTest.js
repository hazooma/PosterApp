import request from 'supertest';
import app from '../app';
describe('Testing The App with trying some possible requests for CTR API', () => {
  test('Success request with predicted results TestCase#1', async () => {
    const res = await request(app)
      .post('/calculateCost')
      .send({
        VS5: 10,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.Orders[0].totalCost).toEqual(17.98);
    expect(res.body.Orders[0].optimalPacks).toEqual(
      expect.arrayContaining([
        {
          packLimit: 5,
          used: 2,
          pricePerPack: 8.99,
        },
      ])
    );
  });

  test('Success request with predicted results TestCase#2', async () => {
    const res = await request(app)
      .post('/calculateCost')
      .send({
        MB11: 14,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.Orders[0].totalCost).toEqual(54.8);
    expect(res.body.Orders[0].optimalPacks).toEqual(
      expect.arrayContaining([
        {
          packLimit: 2,
          used: 3,
          pricePerPack: 9.95,
        },
      ])
    );

    expect(res.body.Orders[0].optimalPacks).toEqual(
      expect.arrayContaining([
        {
          packLimit: 8,
          used: 1,
          pricePerPack: 24.95,
        },
      ])
    );
  });

  test('Success request with predicted results TestCase#3', async () => {
    const res = await request(app)
      .post('/calculateCost')
      .send({
        CF: 13,
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.Orders[0].totalCost).toEqual(25.85);
    expect(res.body.Orders[0].optimalPacks).toEqual(
      expect.arrayContaining([
        {
          packLimit: 3,
          used: 1,
          pricePerPack: 5.95,
        },
      ])
    );

    expect(res.body.Orders[0].optimalPacks).toEqual(
      expect.arrayContaining([
        {
          packLimit: 5,
          used: 2,
          pricePerPack: 9.95,
        },
      ])
    );
  });
});
