'use client'

import { useStoreData } from '@/src/hooks/use-store';
import { useEffect } from 'react';

interface DashboardPageProps {
  params: {
    storeId: string;
  }
}

const DashboardPage:React.FC<DashboardPageProps> = ({ params }) => {
  const { getStore, fetchStoreById: getStoreById } = useStoreData();

  useEffect(() => {
    getStoreById(params.storeId);
  }, [params.storeId, getStoreById]);

  return (
    <div>
      Dashboard
      Store: {getStore()?.name}
    </div>
  )
};

export default DashboardPage;
