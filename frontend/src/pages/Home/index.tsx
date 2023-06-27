import { useState, useEffect } from "react"
import calcLog from "../../constants/calcLog"
import { AxiosError, AxiosResponse } from "axios"
import Select from "react-select"

import { InputsStateType, CalcLogResponseType } from "./types"
import TextInput from "../../components/TextInput"
import CalcLogs from "./CalcLogs"
import operationNumber from "./operationNumber"

const Home = () => {
    const [getCalcLog, setCalcLog] = useState<CalcLogResponseType[]>([])
    const [countCalcLog, setCountCalcLog] = useState<number>(getCalcLog.length)
    const [loading, setLoading] = useState<boolean>(true)

    const [inputs, setInputs] = useState<InputsStateType>({} as InputsStateType)
    const [operand, setOperand] = useState<string>("");
    const [getResult, setResult] = useState<number>(0)

    useEffect(() => {
        calcLog.getAll().then((res: AxiosResponse) => {
            if (res.status) {
                setCalcLog([...res.data])
                setCountCalcLog(res.data.length)
                setLoading(false)
            }
        }).catch((err: AxiosError) => {
            console.log(err)
            setLoading(false)
        })
    }, [countCalcLog])

    const setInputState = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputs(prevState => ({
            ...prevState,
            [e.target.name]: parseInt(e.target.value)
        }))
    }

    const submit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        let result = 0
        result = operationNumber(inputs.number_1, operand, inputs.number_2)

        setResult(result)

        calcLog.create({
            operand,
            number_1: inputs.number_1,
            number_2: inputs.number_2,
            result
        }).then((res: AxiosResponse) => {
            if (res.status) {
                setCountCalcLog(countCalcLog + 1)
            }
        }).catch((err: AxiosError) => console.log(err))
    }

    return (
        <div className="w-full h-[80vh] flex justify-between items-center">
            <form className="w-1/2 h-full border p-5" onSubmit={submit}>
                <div className="mb-6">
                    <TextInput label="First Number" type="number" name="number_1" placeholder="First Number" onChange={(e) => setInputState(e)} required />
                </div>

                <div className="mb-6">
                    <label htmlFor="number_1" className="block mb-2 text-sm font-medium text-gray-900">Operand</label>
                    <Select
                        options={[
                            { value: "+", label: "+" }, { value: "-", label: "-" },
                            { value: "*", label: "x" }, { value: "/", label: "/" }
                        ]}
                        onChange={(e: any) => setOperand(e.value)}
                        required
                    />
                </div>

                <div className="mb-6">
                    <TextInput label="Second Number" type="number" name="number_2" placeholder="Second Number" onChange={(e) => setInputState(e)} required />
                </div>
                <button type="submit" className="text-white bg-slate-800 hover:bg-slate-900 focus:ring-4 focus:outline-none focus:ring-slate-800 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>

                <div className="mt-12">
                    <TextInput label="Result" type="number" name="result" placeholder="Result" value={getResult} disabled />
                </div>
            </form>

            <div className="w-1/2 h-full p-5 overflow-auto border">
                <h1 className="text-2xl font-bold border-b-2 pb-3">Calc Log</h1>

                <ul className="max-w-md dark:divide-gray-700">
                    {
                        loading ? (<span>Loading ... </span>) : (
                            getCalcLog.length === 0 ? (<span className="mt-10">No Data Found</span>) : (
                                getCalcLog.map((item, index) => (
                                    <CalcLogs data={item} key={index} />
                                ))
                            )
                        )
                    }
                </ul>

            </div>
        </div>
    )
}

export default Home