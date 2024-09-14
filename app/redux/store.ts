// app/redux/store/
import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './features/counter/counterSlice';
import shoppingBagReducer from './features/shoppingBag/shoppingBagSlice';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    shoppingBag: shoppingBagReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;