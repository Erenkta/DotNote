import http from "@/lib/http";

export function auth(creds){
    return http.post("/api/v1/auth",creds)
}