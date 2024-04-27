'use client'

import { useEffect, useState } from 'react';

interface DashboardPageProps {
  params: {
    storeId: string;
  }
}

const DashboardPage: React.FC<DashboardPageProps> = ({ params }) => {
  const [store, setStore] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`/api/store/${params.storeId}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setStore(data.store);
        setIsLoading(false);
      });
  }, [params.storeId]);

  if(isLoading) return <div>Loading...</div>
  
  if(store) {
    return (
      <div>
        Dashboard
        Store: {store.name}
      </div>
    )
  }
};

export default DashboardPage;
