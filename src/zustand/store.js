import { create } from "zustand";
const useCountStore = create((set) => ({
  count: 0,
  double: 0,
  increase: () =>
    set((state) => ({
      count: state.count + 1,
      double: (state.count + 1) * 2,
    })),
}));
export const useCount = () => useCountStore((state) => state.count);
export const useIncrement = () => useCountStore((state) => state.increase);
export const useDouble = () => useCountStore((state) => state.double);
