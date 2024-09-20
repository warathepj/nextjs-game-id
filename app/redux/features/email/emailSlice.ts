// Suggested code may be subject to a license. Learn more: ~LicenseLog:2231330903.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:1285192770.

// emailSlice.js
   import { createSlice } from '@reduxjs/toolkit';

   interface Email {
    email: string;
   }

   interface EmailState {
     value: string;
   }

   const initialState: EmailState = {
     value: '',
   };

   const emailSlice = createSlice({
     name: 'email',
     initialState,
     reducers: {
       setEmail: (state, action) => {
         state.value = action
.payload;
       },
     },
   });

   export const { setEmail } = emailSlice.actions;
   export default emailSlice.reducer;
