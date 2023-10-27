import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    isUser: string,
    isEmail: string,
    isLoggedIn: boolean,
    setIsLoggedIn: (isLoggedIn: boolean) => void
    setIsUser: (isUser: string) => void
    setIsEmail: (isEmail: string) => void
}
  
export const AppContext = createContext({} as IAppContext)
  
export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    const [ isUser, setIsUser ] = useState<string>("")
    const [ isEmail, setIsEmail ] = useState<string>("")

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login, name, email } = JSON.parse(storage)
        setIsUser(name)
        setIsLoggedIn(login)
        setIsEmail(email)
      }
    }, [])
  
    return (
      <AppContext.Provider value={{ isUser, isEmail, isLoggedIn, setIsLoggedIn, setIsUser, setIsEmail }}>
        { children } 
      </AppContext.Provider>
    )
}
