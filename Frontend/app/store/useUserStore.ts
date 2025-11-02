import { create } from 'zustand';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
}

interface UserStore {
  user: User | null;
  setUser: (user: User | null) => void;
}

const useUserStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));

export default useUserStore;