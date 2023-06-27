import axios from "../config/axios"

export default {
    login: (credentials: any) => axios.post("/users/login", credentials),
    register: (payload: any) => axios.post("/users/register", payload),
}