import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, toggle: true };
const intialAuthState = { isAuthneticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    incrementByAmount(state, action) {
      state.value += action.payload;
    },
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState: intialAuthState,
  reducers: {
    login(state) {
      state.isAuthneticated = true;
    },
    logout(state) {
      state.isAuthneticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const authActions = authSlice.actions;
export const counterActions = counterSlice.actions;

export default store;
