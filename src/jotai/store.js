import { atom, useAtomValue, useSetAtom } from "jotai";

const count = atom(0);
const countValue = atom((get) => get(count));

const increment = atom(null, (get, set) => {
  set(count, get(count) + 1);
});
const doubleCount = atom((get) => get(count) * 2);

export const useCount = () => useAtomValue(countValue);
export const useIncrement = () => useSetAtom(increment);
export const useDouble = () => useAtomValue(doubleCount);
