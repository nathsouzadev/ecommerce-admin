'use client';

import { StoreModal } from '@/components/modals/store-modal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <StoreModal />;
};
