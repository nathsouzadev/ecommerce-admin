'use client';

import { useStoreData } from '@/hooks/use-store';
import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SetupLayout ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useAuth();
  const { store, setStore } = useStoreData();

  if (!userId) {
    redirect('/sign-in');
  }

  useEffect(() => {
    fetch('/api/store', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        if (data.statusCode === 404) {
          return;
        }
        setStore(data.store);
        setIsLoading(false);
      });
  }, [setStore]);

  if (!store && isLoading) {
    return <p>Loading</p>;
  }

  if(store?.id) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
