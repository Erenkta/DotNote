import { createSlice } from "@reduxjs/toolkit"
import { clearAuthToken, loadAuthState } from "./storage"
import { setToken } from "@/lib/http"

export const authSlice = createSlice({ // create slice nedir ne işe yarar
    name:'auth',
    initialState:loadAuthState(),
    reducers:{
        loginSuccess: (state,action)=>{
            state.id = action.payload.user.id // bize verilen state'i action ile gönderilen bilgiyle değiştir
            state.username = action.payload.user.username
            state.email = action.payload.user.email
            state.image = action.payload.user.image
            setToken(action.payload.token)
        },
    
        logoutSuccess : (state,action)=>{
            state.id = 0
            delete state.username
            delete state.email
            delete state.image
            clearAuthToken()
        }
    }
})