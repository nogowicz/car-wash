import { configureStore } from "@reduxjs/toolkit";

import priceReducer from './price';
import authReducer from './auth';
import carWashReducer from './favCarWash';

export const store = configureStore({
    reducer: {
        price: priceReducer,
        auth: authReducer,
        favCarWash: carWashReducer

    }
});