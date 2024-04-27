import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET (_: Request, { params }: { params: { id: string } }) {
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
    console.log('GET_POST]', error);
    return new NextResponse('Internal error', { status: 500 });
  }
}
