'use client';

import { UserButton } from '@clerk/nextjs';
import { MainNav } from './main-nav';
import StoreSwitcher from './store-switcher';
import { useEffect, useState } from 'react';
import { StoreModel } from '@/models/store.model';
import { redirect } from 'next/navigation';

const Navbar = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [stores, setStores] = useState<StoreModel[] | null>(null);

  useEffect(() => {
    fetch('/api/stores', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.statusCode === 404) {
          setStores(null);
          return;
        }

        setStores(data.stores);
        setIsLoading(false);
      });
  }, []);

  if (!stores && !isLoading) {
    redirect('/');
  }

  if (isLoading && !stores) {
    return <p>Loading navbar</p>;
  }

  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <div>
          <StoreSwitcher items={stores!} />
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
