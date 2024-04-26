import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET (_: Request, { params }: { params: { id: string } }) {
  const { userId } = auth();
  if (!userId) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
    
  const response = await fetch(
    `${process.env.API_SERVICE_URL}/user/${userId}/store/${params.id}`,
  );
  const store = await response.json();

  return NextResponse.json(store);
}
