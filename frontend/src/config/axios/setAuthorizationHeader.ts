import axios from "./index"

export default (token: string | null) => {
    if (token) {
        axios.defaults.headers.common.Authorization = token
    } else {
        delete axios.defaults.headers.common.Authorization
    }
}