import { StoreModel } from '@/src/models/store.model';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET (): Promise<NextResponse<{stores: StoreModel[]}>> {
  try {
    const { userId } = auth();
    if (!userId) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const response = await fetch(
      `${process.env.API_SERVICE_URL}/user/${userId}/stores`,
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
