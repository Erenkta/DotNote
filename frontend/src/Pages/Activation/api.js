//import axios from "axios"; http kullanacağız

import http from "@/lib/http";

export function userActivate(token){
    return http.patch(`/api/v1/users/${token}/active`)
}