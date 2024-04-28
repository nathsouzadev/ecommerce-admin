import { StoreModel } from '@/models/store.model';
import { create } from 'zustand';

interface UseStoreData {
  store: StoreModel | null;
  setStore: (store: StoreModel) => void;
}

export const useStoreData = create<UseStoreData>((set) => ({
  store: null,
  setStore: (store: StoreModel) => set({ store }),
}));
