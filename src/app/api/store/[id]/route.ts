import { StoreModel } from '@/src/models/store.model';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET (_: Request, { params }: { params: { id: string } }): Promise<NextResponse<{store: StoreModel}>>  {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const response = await fetch(
      `${process.env.API_SERVICE_URL}/user/${userId}/store/${params.id}`,
    );
    const result = await response.json();

    if (result.statusCode === 404)
      return new NextResponse(result.message, { status: 404 });

    return NextResponse.json(result);
  } catch (error) {
    console.log('GET_STORE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function PATCH (req: Request, { params }: { params: { id: string } }): Promise<NextResponse<{store: StoreModel}>>  {
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
      `${process.env.API_SERVICE_URL}/user/${userId}/store/${params.id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name }),
      }
    );
    const result = await response.json();

    if (result.statusCode === 404)
      return new NextResponse(result.message, { status: 404 });

    return NextResponse.json(result);
  } catch (error) {
    console.log('PATCH_STORE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}

export async function DELETE (_: Request, { params }: { params: { id: string } }): Promise<NextResponse<{store: StoreModel}>>  {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const response = await fetch(
      `${process.env.API_SERVICE_URL}/user/${userId}/store/${params.id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );
    const result = await response.json();

    if (result.statusCode === 404)
      return new NextResponse(result.message, { status: 404 });

    return NextResponse.json(result);
  } catch (error) {
    console.log('DELETE_STORE]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
