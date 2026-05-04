import { create } from "zustand";

export type User = {
  id: string;
  email: string;
  first_name: string;
  last_name: string;
};

export type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  logout: () => void;
};

export const useUserStore = create<UserStore>((set) => ({
  user: null,

  setUser: (user) => set({ user }),

  logout: () => set({ user: null }),
}));