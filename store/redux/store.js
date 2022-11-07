import { configureStore } from "@reduxjs/toolkit";

import priceReducer from './price';

export const store = configureStore({
    reducer: {
        price: priceReducer
    }
});