// import axios from "axios";
// import { i18nInstance } from "../../locales";
//bunlar yerine kendi yazdığımız lib/http'yi kullanacağız

import http from "@/lib/http";

export function signUp(body){
    return http.post("/api/v1/users",body,{ //3.parametre configurasyon parametresi olarak bilinir
        // headers:{
        //     "Accept-Language": i18nInstance.language   // böyle i18n'i bir instance yaparak burdan da erişeblliriz 
        //     //Dili yolluyor    //localStorage.getItem("lang")  bu da işe yaradı ama hoca böyle yapmadı
        // } http'de header set ettik diye kaldırdık
    })
}
