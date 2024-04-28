/**
 * @jest-environment node
 */
import { randomUUID } from 'crypto';
import { GET } from '../../../app/api/stores/route';
import nock from 'nock';
import * as clerk from '@clerk/nextjs/server';

jest.mock('@clerk/nextjs/server');

describe('GET /api/stores', () => {
  it('should return store data when authenticated', async () => {
    const mockStoreId = randomUUID();
    const mockUserId = `user_${randomUUID()}`;
    const stores = Array.from({ length: 3 }, (_, index) => ({ 
      id: randomUUID(), 
      name: `Store ${index + 1}`,
      userId: mockUserId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }));
    nock(`${process.env.API_SERVICE_URL}`)
      .get(`/user/${mockUserId}/stores`)
      .reply(200, {
        stores,
      });
    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: mockUserId });

    const response = await GET();
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toMatchObject({
      stores,
    });
  });

  it('should return unauthorized when not authenticated', async () => {
    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: null });

    const response = await GET();
    expect(response.status).toBe(401);
  });

  it('should return 404 when store is not found', async () => {
    const mockUserId = `user_${randomUUID()}`;
    nock(`${process.env.API_SERVICE_URL}`)
      .get(`/user/${mockUserId}/stores`)
      .reply(404, {
        statusCode: 404,
        message: 'Store not found',
      });
    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: mockUserId });

    const response = await GET();
    expect(response.status).toBe(404);
  });

  it('should return an error response if an internal error occurs', async () => {
    const mockUserId = `user_${randomUUID()}`;

    nock(`${process.env.API_SERVICE_URL}`)
      .get(`/user/${mockUserId}/stores`)
      .replyWithError('Internal error');

    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: mockUserId });

    const response = await GET();
    expect(response.status).toBe(500);
  });
});
