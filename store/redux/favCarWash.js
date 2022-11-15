import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";

const carWashSlice = createSlice({
    name: 'favCarWash',
    initialState: {
        favCarWash: 0
    },
    reducers: {
        setFavCarWash: (state, action) => {
            state.favCarWash = action.payload.favCarWash;
            AsyncStorage.setItem('favCarWash', action.payload.favCarWash);
        }
    }
});

export const setFavCarWash = carWashSlice.actions.setFavCarWash;
export default carWashSlice.reducer;