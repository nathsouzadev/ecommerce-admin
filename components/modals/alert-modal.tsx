'use client';

import { useEffect, useState } from 'react';
import { Modal } from '../modal';
import { Button } from '../ui/button';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading: boolean;
}

export const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Are you sure?'
      description='This actions cannpt be undone'
    >
      <div className='pt-6 space-x-2 flex items-center justify-end w-full'>
        <Button disabled={isLoading} variant='outline' onClick={onClose}>
          Cancel
        </Button>
        <Button disabled={isLoading} variant='destructive' onClick={onConfirm}>
          Confirm
        </Button>
      </div>
    </Modal>
  );
};
