// Suggested code may be subject to a license. Learn more: ~LicenseLog:4254345429.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1729932395.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:3662556801.
// app/redux/shoppingCartSlice.ts
    import { createSlice, PayloadAction } from '@reduxjs/toolkit';
    
    interface Product {
      id: string;
      name: string;
      path: string;
      description: string;
      price: number; // Add price if needed
    }
    
    interface ShoppingBagState {
      items: Product[];
    }
    
    const initialState: ShoppingBagState = {
      items: [],
    };
    // ///////////sample from local/////////////

    // app/redux/profileSlice.js
// import { createSlice } from '@reduxjs/toolkit';



    ////////////sample from local/////////
    
    const shoppingฺฺฺฺBagSlice = createSlice({
      name: 'shoppingฺฺฺฺBag',
      initialState,
      reducers: {
        addProduct: (state, action: PayloadAction<Product>) => {
          state.items.push(action.payload);
        },
        removeProduct: (state, action: PayloadAction<number>) => {
          state.items = state.items.filter((item) => item.id !== action.payload);
        },
        // Add other actions like clearCart, updateQuantity, etc. if needed
      },
    });
    
    export const { addProduct, removeProduct } = shoppingฺฺฺฺBagSlice.actions;
    export default shoppingฺฺฺฺBagSlice.reducer;
