import { useContext, useState } from "react"
import { useNavigate } from "react-router-dom"

import { UserContext } from "../../App"

const Navbar = () => {
    const navigate = useNavigate()
    const { userLogin } = useContext(UserContext)
    const [dropDown, setDropDown] = useState(false)

    const logout = () => {
        sessionStorage.removeItem("user_info");
        window.location.pathname = "/login"
    }

    return (
        <nav className="bg-white border-gray-200 shadow-md px-3 md:px-0 relative z-50">
            <div className="flex flex-wrap items-center justify-between container mx-auto py-4">
                <a href="/" className="flex items-center">
                    <span className="self-center text-lg font-semibold whitespace-nowrap md:text-2xl">Simple Calculator</span>
                </a>
                <button data-collapse-toggle="navbar-dropdown" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
                    {
                        Object.keys(userLogin).length !== 0 ? (
                            <div className="relative">
                                <button className="flex items-center justify-between w-full py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
                                    onClick={() => setDropDown(!dropDown)}
                                >
                                    {userLogin.username}
                                    <svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                                    </svg>
                                </button>
                                <div className={`absolute right-0 z-50 ${dropDown ? "" : "hidden"} font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44`}>
                                    <div className="py-1">
                                        <button type="submit" className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => logout()}>Log out</button>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
                                <li>
                                    <a 
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                        onClick={() => navigate("/login")}
                                    >
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0"
                                        onClick={() => navigate("/register")}
                                    >
                                        Register
                                    </a>
                                </li>
                            </ul>
                        )
                    }
                </div>
            </div>
        </nav>

    )
}

export default Navbar