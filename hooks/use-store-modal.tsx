import { create } from 'zustand';

interface UseStoreModal {
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export const useStoreModal = create<UseStoreModal>((set) => ({
  isOpen: false,
  onClose: () => set({ isOpen: false }),
  onOpen: () => set({ isOpen: true }),
}));
