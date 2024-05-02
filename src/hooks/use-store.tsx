import { StoreModel } from '@/src/models/store.model';
import { create } from 'zustand';

interface UseStoreData {
  store: StoreModel | null;
  setStore: (store: StoreModel) => void;
  fetchStore: () => Promise<void>;
  fetchStoreById: (storeId: string) => Promise<void>;
  isLoading: boolean;
  getStore: () => StoreModel | null;
}

export const useStoreData = create<UseStoreData>((set, get) => ({
  store: null,
  isLoading: false,
  setStore: (store: StoreModel) => set({ store: {
    ...store
  } }),
  fetchStoreById: async(storeId: string) => {
    set({ isLoading: true });
    try {
      const response = await fetch(`/api/store/${storeId}`)
      const data = await response.json()
      if (data.statusCode === 404) {
        return;
      }
      set({ store: {
        ...data.store
      } });
      set({ isLoading: false });
    } catch (error) {
      console.log(['STORE_STATE_FETCH_ERROR'], error)
      set({ isLoading: false });
    }
  },
  fetchStore: async() => {
    set({ isLoading: true });
    try {
      const response = await fetch('/api/store')
      const data = await response.json()
      if (data.statusCode === 404) {
        return;
      }
      set({ store: { ...data.store } });
      set({ isLoading: false });
    } catch (error) {
      console.log(['STORE_STATE_FETCH_ERROR'], error)
      set({ isLoading: false });
    }
  },
  getStore: () => get().store,
}));
