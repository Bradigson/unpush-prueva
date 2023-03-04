import { createContext, ReactNode, useState } from "react";
import { User } from "./ContextModels";

const LoginContext = createContext({});
interface Props {
    children: ReactNode;
}

export function UsersContextProvider({children} : Props){

    const [UserContext, setUserContext] = useState<Array<User>>([]);
    return(
        <LoginContext.Provider value={{UserContext, setUserContext}}>
            {children}
        </LoginContext.Provider>
    )
}



export default LoginContext;