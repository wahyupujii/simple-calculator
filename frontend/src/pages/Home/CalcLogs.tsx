import { CalcLogResponseType } from './types'

type CalcLogType = {
    data: CalcLogResponseType
}

const CalcLogs = ({ data }: CalcLogType) => {
    return (
        <li className="py-3 shadow-sm sm:pt-4">
            <div className="space-x-4">
                <div className="inline-flex items-center text-base font-semibold">
                    <span>
                        {data.number_1}
                        &nbsp;
                        {data.operand}
                        &nbsp;
                        {data.number_2}
                        &nbsp;
                        =
                        &nbsp;
                        {data.result}
                    </span>
                </div>
            </div>
        </li>
    )
}

export default CalcLogs