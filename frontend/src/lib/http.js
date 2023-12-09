import axios from "axios";
import {i18nInstance } from "@/locales"
import { storeAuthToken } from "@/pages/redux/storage";


//Bu sayfada şunu yapacağız
//Mesela her api request için dil ortak yani sitede seçilen dil ne ise o
//Bu gibi ortak özellikleri burda halledeceğiz hepsine tek tek yazmak yerine


const http = axios.create()

let authToken;
export function setToken(token){
    authToken = token
    storeAuthToken(token)
}


// Interceptors nedir nasıl kullanılır detaylı olarak araştır !!
http.interceptors.request.use((config)=>{
    config.headers["Accept-Language"] = i18nInstance.language
    if(authToken){
        config.headers["Authorization"] = `${authToken.prefix} ${authToken.token}` // header'a token'i koyuyoruz
    }
    return config
})



export default http