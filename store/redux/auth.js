import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: '',
        isAuthenticated: false
    },

    reducers: {
        authenticate: (state, action) => {
            state.token = action.payload.token;
            state.isAuthenticated = true;
            AsyncStorage.setItem('token', action.payload.token);
        },

        logout: (state, action) => {
            state.token = null;
            state.isAuthenticated = false;
            AsyncStorage.removeItem('token');
        },
    }
});


export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;
export default authSlice.reducer;