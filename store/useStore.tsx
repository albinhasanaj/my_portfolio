import { create } from "zustand";

interface Store {
    isChangingPage: boolean;
    startTransition: () => void;
    endTransition: () => void;
};

const useStore = create<Store>((set) => ({
    isChangingPage: false,
    startTransition: () => set({ isChangingPage: true }),
    endTransition: () => set({ isChangingPage: false }),
}));

export default useStore;