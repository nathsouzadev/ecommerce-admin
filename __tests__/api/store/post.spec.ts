/**
 * @jest-environment node
 */
import { randomUUID } from 'crypto';
import { POST } from '../../../app/api/store/route.ts';
import nock from 'nock';
import * as clerk from '@clerk/nextjs/server';

jest.mock('@clerk/nextjs/server');

describe('POST /api/store', () => {
  it('should create a store', async () => {
    nock(`${process.env.API_SERVICE_URL}/user/testUserId/store`)
      .post('')
      .reply(201, {
        store: {
          id: randomUUID(),
          userId: 'testStoreId',
          name: 'Test Store',
          createdAt: '2021-09-01T00:00:00.000Z',
          updatedAt: '2021-09-01T00:00:00.000Z',
        },
      });
    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: 'testUserId' });
    const req = {
      json: () => ({ name: 'Test Store' }),
    };

    const response = await POST(req as any);
    expect(response.status).toBe(200);
    const data = await response.json();
    expect(data).toMatchObject({
      store: {
        id: expect.any(String),
        userId: 'testStoreId',
        name: 'Test Store',
        createdAt: '2021-09-01T00:00:00.000Z',
        updatedAt: '2021-09-01T00:00:00.000Z',
      },
    });
  });

  it('should return an error response if name is not provided', async () => {
    const req = {
      json: jest.fn().mockResolvedValue({}),
    };
    const response = await POST(req as any);
    expect(response.status).toBe(400);
  });

  it('should return an unauthorized response if the user is not authenticated', async () => {
    jest.spyOn<any, any>(clerk, 'auth').mockReturnValue({ userId: null });
    const req = {
      json: () => ({ name: 'Test Store' }),
    };

    const response = await POST(req as any);
    expect(response.status).toBe(401);
  });

  it('should return an error response if an internal error occurs', async () => {
    const req = {
      json: jest.fn().mockRejectedValue(new Error('Internal error')),
    };

    const response = await POST(req as any);
    expect(response.status).toBe(500);
  });
});
