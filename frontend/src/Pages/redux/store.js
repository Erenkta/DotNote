import { authSlice } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import { storeAuthState } from "./storage";

export const {loginSuccess,logoutSuccess} = authSlice.actions


export const store = configureStore({
    reducer : {
        auth:authSlice.reducer 
    },
})

store.subscribe(()=>{ // store her güncellendiğinde çağrılan bir fonksiyon
    storeAuthState(store.getState().auth)
})