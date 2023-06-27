import { createContext, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './config/routing'
import { Navbar } from './components'
import { AuthTypes } from './types'

type UserContextType = {
  userLogin: AuthTypes;
  setUserLogin: (user: AuthTypes) => void
}

export const UserContext = createContext<UserContextType>({} as UserContextType);

const App = () => {
  const [userLogin, setUserLogin] = useState<AuthTypes>({} as AuthTypes);
  return (
    <BrowserRouter>
      <UserContext.Provider value={{ userLogin, setUserLogin }}>
        <Navbar />
        <div className='container mx-auto mt-10'>
          <Routing />
        </div>
      </UserContext.Provider>
    </BrowserRouter>
  )
}

export default App