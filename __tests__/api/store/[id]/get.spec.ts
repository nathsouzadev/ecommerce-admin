/**
 * @jest-environment node
 */
import { randomUUID } from 'crypto';
import { GET } from '../../../../src/app/api/store/[id]/route';
import nock from 'nock';
import * as clerk from '@clerk/nextjs/server';

jest.mock('@clerk/nextjs/server');

describe('GET /api/store/[id]', () => {
  it('should return store data when authenticated', async () => {
    const mockStoreId = randomUUID();
    const mockUserId = `user_${randomUUID()}`;
    nock(`${process.env.API_SERVICE_URL}`)
      .get(`/user/${mockUserId}/store/${mockStoreId}`)
      .reply(200, {
        store: {
          id: mockStoreId,
          userId: mockUserId,
          name: 'Test Store',
          createdAt: '2021-09-01T00:00:00.000Z',
          updatedAt: '2021-09-01T00:00:00.000Z',
        },
      });
    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: mockUserId });

    const request = {} as Request;
    const params = { id: mockStoreId };

    const response = await GET(request, { params });
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toMatchObject({
      store: {
        id: expect.any(String),
        userId: mockUserId,
        name: 'Test Store',
        createdAt: '2021-09-01T00:00:00.000Z',
        updatedAt: '2021-09-01T00:00:00.000Z',
      },
    });
  });

  it('should return unauthorized when not authenticated', async () => {
    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: null });

    const request = {} as Request;
    const params = { id: 'mockStoreId' };

    const response = await GET(request, { params });
    expect(response.status).toBe(401);
  });

  it('should return 404 when store is not found', async () => {
    const mockStoreId = randomUUID();
    const mockUserId = `user_${randomUUID()}`;
    nock(`${process.env.API_SERVICE_URL}`)
      .get(`/user/${mockUserId}/store/${mockStoreId}`)
      .reply(404, {
        statusCode: 404,
        message: 'Store not found',
      });
    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: mockUserId });

    const request = {} as Request;
    const params = { id: mockStoreId };

    const response = await GET(request, { params });
    expect(response.status).toBe(404);
  });

  it('should return an error response if an internal error occurs', async () => {
    const mockStoreId = randomUUID();
    const mockUserId = `user_${randomUUID()}`;

    nock(`${process.env.API_SERVICE_URL}`)
      .get(`/user/${mockUserId}/store/${mockStoreId}`)
      .replyWithError('Internal error');

    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: mockUserId });

    const request = {
      json: jest.fn().mockRejectedValue(new Error('Internal error')),
    } as any;
    const params = { id: mockStoreId };

    const response = await GET(request, { params });
    expect(response.status).toBe(500);
  });
});
