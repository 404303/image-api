import supertest from 'supertest';
import app from '../index';

const request = supertest(app);

describe('check endpoint respone', (): void => {
  describe('test app main endpoint', (): void => {
    it('gets /', async (): Promise<void> => {
      const response = await request.get('/');
      expect(response.status).toBe(200);
    });
  });
  describe('check the endpoint for image api', (): void => {
    it('check endpoint with vaild file name', async (): Promise<void> => {
      const response = await request.get('/api/images?filename=fjord');
      expect(response.status).toBe(200);
    });
    it('check endpoint with vaild query', async (): Promise<void> => {
      const response = await request.get(
        '/api/images?filename=fjord&width=600&height=500',
      );
      expect(response.status).toBe(200);
    });
    it('check endpoint with invaild width', async (): Promise<void> => {
      const response: supertest.Response = await request.get(
        '/api/images?filename=fjord&width=-200&height=200',
      );
      expect(response.status).toBe(406);
    });
    it('check endpoint with no giving query', async (): Promise<void> => {
      const response = await request.get('/api/images');

      expect(response.status).toBe(406);
    });
  });
  it('check endpoint with empty height', async (): Promise<void> => {
    const response: supertest.Response = await request.get(
      '/api/images?filename=fjord&width=500&height=',
    );
    expect(response.status).toBe(406);
  });
});
