'use client'

import Navbar from '@/components/navbar';
import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DashboardLayout ({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: {
    storeId: string;
  }
}>) {
  const [store, setStore] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { userId } = useAuth();
    
  if (!userId) {
    redirect('/sign-in');
  }

  useEffect(() => {
    fetch(`/api/store/${params.storeId}`, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false)
        if(data.statusCode === 404) {
          setStore(null)
          return
        }
        
        setStore(data)
      })
  }, [params.storeId])

  if(isLoading) {
    return <p>Loading</p>
  }

  if(!store && !isLoading) {
    redirect('/');
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}
