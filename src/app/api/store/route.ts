import { StoreModel } from '@/src/models/store.model';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function POST (req: Request): Promise<NextResponse<{store: StoreModel}>> {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    if (!name) {
      return new NextResponse('Name is required', { status: 400 });
    }

    const response = await fetch(
      `${process.env.API_SERVICE_URL}/user/${userId}/store`,
      {
        method: 'POST',
        body: JSON.stringify({ name }),
        headers: { 'Content-type': 'application/json' },
      },
    );

    const store = await response.json();

    return NextResponse.json(store);
  } catch (error) {
    console.log('STORES_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function GET (): Promise<NextResponse<{store: StoreModel}>> {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const response = await fetch(
      `${process.env.API_SERVICE_URL}/user/${userId}/store`,
    );
    const result = await response.json();

    if (result.statusCode === 404)
      return new NextResponse(result.message, { status: 404 });

    return NextResponse.json(result);
  } catch (error) {
    console.log('STORES_GET]', error);
    return new NextResponse('Internal error', { status: 500 }); 
  }
}
