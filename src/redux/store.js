import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
    double: 0,
  },
  reducers: {
    incremented: (state) => {
      state.count += 1;
      state.double = state.count * 2;
    },
  },
});

export const { incremented } = counterSlice.actions;

export const store = configureStore({
  reducer: counterSlice.reducer,
});

export const useCount = () => useSelector((state) => state.count);
export const useDouble = () => useSelector((state) => state.double);
