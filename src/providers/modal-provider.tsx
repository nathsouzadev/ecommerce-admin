'use client';

import { StoreModal } from '@/src/components/modals/store-modal';
import { useEffect, useState } from 'react';

export const ModalProvider = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return <StoreModal />;
};
