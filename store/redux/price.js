import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
    name: 'price',
    initialState: {
        price: 3
    },
    reducers: {
        setPrice: (state, action) => {
            state.price = action.payload.price;
        }
    }
});

export const setPrice = priceSlice.actions.setPrice;
export default priceSlice.reducer;