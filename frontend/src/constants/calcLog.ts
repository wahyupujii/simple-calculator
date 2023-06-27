import axios from "../config/axios"

export default {
    getAll: () => axios.get(`/calc-log/get`),
    create: (data: any) => axios.post("/calc-log/add", data),
}