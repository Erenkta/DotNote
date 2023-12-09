

export function storeAuthState(auth){
    localStorage.setItem('auth', JSON.stringify(auth));
}


export function loadAuthState(){
    const defaultState = { id: 0 };
    const authStateInStorage = localStorage.getItem('auth');
    if(!authStateInStorage) return defaultState;
    try {
        return JSON.parse(authStateInStorage)
    } catch {
        return defaultState;
    }
}


export function storeAuthToken(token){
    localStorage.setItem('token',JSON.stringify(token))
}

export function clearAuthToken(){
    localStorage.removeItem('token')
}

export function loadToken(){
    const localToken = localStorage.getItem('token')
    if(!localToken) return null
    return JSON.parse(localToken).token // string halinde sadece token kısmını getirmek için JSON.parse şart
}