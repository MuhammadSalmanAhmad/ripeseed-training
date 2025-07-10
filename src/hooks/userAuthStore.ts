import { create } from 'zustand'

interface Authstore{
    authState:boolean,
    user: any
    setAuthState: ()=>void
    setUser: (user:any)=>void
}

export const userAuthStore = create<Authstore>()((set) => ({
  authState: false,
  user: null,
  setAuthState: () => set((state) => ({ authState: !state.authState })),
  setUser: (user: any) => set({ user }),
}));