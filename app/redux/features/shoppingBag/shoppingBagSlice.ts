// app/redux/features/shoppingBag/shoppingBagSlice.ts/
//from app/redux/features/shoppingBag/shoppingBagSlice.ts/
// make function for reset count to 0

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: string;
  name: string;
  path: string;
  description: string;
  price: number;
}

interface ShoppingBagState {
  
  //from app/redux/features/shoppingBag/shoppingBagSlice.ts/
  // count is length of items, how to code count?
  items: Product[];
  totalPrice: number;
  count: number;
}

const initialState: ShoppingBagState = {
  items: [],
  totalPrice: 0,
  count: 0,
};

const shoppingBagSlice = createSlice({
  name: 'shoppingBag',
  initialState,
  reducers: {
    addToBag: (state, action: PayloadAction<Product>) => {
      /////////NEW CODE

      const existingItem = state.items.find((item) => item.id === action.payload.id);
      if (!existingItem) {
        state.items.push(action.payload);
        state.totalPrice += action.payload.price;
      }
      state.count = state.items.length; // Update count 
      /////////NEW CODE
      // state.items.push(action.payload); Old working code
    },

    resetCount: (state) => {
      state.count = 0;
    },
  },
});

export const { addToBag, resetCount } = shoppingBagSlice.actions;
export default shoppingBagSlice.reducer;