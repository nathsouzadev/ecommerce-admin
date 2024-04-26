import { auth } from '@clerk/nextjs/server';
import { randomUUID } from 'crypto';
import { redirect } from 'next/navigation';

export default async function SetupLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = auth();

  if (!userId) {
    redirect('/sign-in');
  }

  const store = {
    id: randomUUID(),
    name: 'Test Store',
  }

  console.log(store, userId)
    
  //   if(store) {
  //     redirect(`/${store.id}`);
  //   }

  return(
    <>
      {children}
    </>
  )
}
