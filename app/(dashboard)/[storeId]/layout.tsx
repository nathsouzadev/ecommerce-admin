'use client'

import Navbar from '@/components/navbar';
import { useAuth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

export default function DashboardLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { userId } = useAuth();
    
  if (!userId) {
    redirect('/sign-in');
  }

  return (
    <div>
      <Navbar />
      {children}
    </div>
  );  
}
