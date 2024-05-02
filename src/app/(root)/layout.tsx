'use client';

import { useStoreData } from '@/src/hooks/use-store';
import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SetupLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = useAuth();
  const { getStore, fetchStore, isLoading } = useStoreData();
  const [render, setRender] = useState(false);

  if (!userId) {
    redirect('/sign-in');
  }

  useEffect(() => {
    fetchStore()
      .then(() => setRender(true));
  }, [fetchStore]);

  if (!getStore() && isLoading && !render) {
    return <p>Loading</p>;
  }

  if(getStore()?.id && !isLoading && render) {
    window.location.replace(`/${getStore()?.id}`);
  }

  if(!getStore() && !isLoading && render) {
    return <>{children}</>;
  }
}
