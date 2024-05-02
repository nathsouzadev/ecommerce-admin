'use client'

import Navbar from '@/src/components/navbar';

export default function DashboardLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );  
}
