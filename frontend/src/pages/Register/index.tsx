import React, { useState, useContext } from "react"
import auth from "../../constants/auth"
import { useNavigate } from "react-router-dom"
import { AxiosError, AxiosResponse } from "axios"

import { AuthTypes } from "../../types"
import { UserContext } from "../../App"
import setAuthorizationHeader from "../../config/axios/setAuthorizationHeader"
import TextInput from "../../components/TextInput"

const Register = () => {
    const { setUserLogin } = useContext(UserContext)
    const [inputs, setInputs] = useState<AuthTypes>({} as AuthTypes)
    const navigate = useNavigate()

    const setInputState = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        auth.register(inputs).then((res: AxiosResponse) => {
            if (res.status) {
                setAuthorizationHeader(res.data.access_token)
                sessionStorage.setItem("user_info", JSON.stringify(res.data))
                setUserLogin(res.data)
                navigate("/")
            }
        }).catch((err: AxiosError) => console.log(err))
    }

    return (
        <div className="w-full h-[80vh] flex justify-center items-center">
            <form className="w-2/4" onSubmit={submit}>
                <h1 className="text-4xl my-5 font-semibold">Register</h1>

                <div className="mb-6">
                    <TextInput label="Username" type="text" name="username" placeholder="username" onChange={(e) => setInputState(e)} required />
                </div>

                <div className="mb-6">
                    <TextInput label="Password" type="password" name="password" placeholder="password" onChange={(e) => setInputState(e)} required />
                </div>
                <button type="submit" className="text-white bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-slate-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
            </form>
        </div>
    )
}

export default Register