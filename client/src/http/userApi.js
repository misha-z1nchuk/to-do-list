import {$host} from "./index";
import jwt_decode from "jwt-decode"

export const registration = async (email, password) => {
    const {data} = await $host.post('api/auth/registration', {email, password, role:'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/auth/login', {email, password, role:'ADMIN'})
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}
export const check = async () => {
    const {data} = await $host.get('api/auth/check', )
    localStorage.setItem('token', data.token)
    return jwt_decode(data.token)
}

