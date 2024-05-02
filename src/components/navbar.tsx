'use client';

import { UserButton } from '@clerk/nextjs';
import { MainNav } from './main-nav';
import StoreSwitcher from './store-switcher';
import { useEffect, useState } from 'react';
import { StoreModel } from '@/src/models/store.model';
import { redirect } from 'next/navigation';
import { useStoreData } from '@/src/hooks/use-store';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [render, setRender] = useState(false);
  const [stores, setStores] = useState<StoreModel[] | null>(null);
  const { getStore } = useStoreData();

  useEffect(() => {
    if (!stores && isLoading) {
      fetch('/api/stores', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((data) => {
          setRender(false);
          if (data.statusCode === 404) {
            setStores(null);
            return;
          }

          setStores(data.stores);
          setIsLoading(false);
          setRender(true);
        });
    }
  }, [getStore, isLoading, stores]);

  if (!stores && !isLoading && render) {
    redirect('/');
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>
          {isLoading && !stores ? (
            <StoreSwitcher items={[]} isLoading={!isLoading} />
          ) : (
            <StoreSwitcher items={stores!} isLoading={isLoading} />
          )}
        </div>
        <div>
          <MainNav className="mx-6 " />
        </div>
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
