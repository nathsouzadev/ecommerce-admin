'use client'

import { SettingsForm } from '@/src/components/settings-form';
import { useStoreData } from '@/src/hooks/use-store';
import { StoreModel } from '@/src/models/store.model';
import { useEffect, useState } from 'react';

interface SettingsPageProps {
  params: {
    storeId: string;
  }
}

const SettingsPage: React.FC<SettingsPageProps> = ({ params }) => {
  const { store, isLoading, fetchStoreById: getStoreById } = useStoreData()
  const [render, setRender] = useState(false)

  useEffect(() => {
    setRender(false)
    getStoreById(params.storeId)
      .then(() => setRender(true))
  }, [params.storeId, getStoreById])

  if(isLoading && !store) {
    return <p>Loading...</p>
  }

  if(!store && render) {
    return <p>Store not found!</p>
  }

  return (
    <div className='flex-col'>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <SettingsForm initialData={store as StoreModel}/>
      </div>
    </div>
  );
};

export default SettingsPage;
