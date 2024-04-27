'use client';

import { useAuth } from '@clerk/nextjs';
import { randomUUID } from 'crypto';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default async function SetupLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [store, setStore] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useAuth();

  if (!userId) {
    redirect('/sign-in');
  }

  useEffect(() => {
    fetch(`/api/store`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
        if (data.statusCode === 404) {
          setStore(null);
          return;
        }

        setStore(data);
      });
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (store) {
    redirect(`/${store.id}`);
  }

  return <>{children}</>;
}
