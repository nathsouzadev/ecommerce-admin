'use client'

import { useStoreData } from '@/hooks/use-store';
import { redirect } from 'next/navigation';

const DashboardPage = () => {
  const { store } = useStoreData();

  if(!store) {
    redirect('/');
  }

  return (
    <div>
      Dashboard
      Store: {store?.name}
    </div>
  )
};

export default DashboardPage;
