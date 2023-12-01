import http from "../../lib/http"



export function signup(body,lang){
    return http.post("/api/v1/adduser",body,{
        headers:{
            "Accept-Language":lang
        }
    });
}