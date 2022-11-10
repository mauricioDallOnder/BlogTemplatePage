import { PostsApi } from "./PostsApi";
import {createContext } from "react";


type ApiContextProviderProps = {
    children: React.ReactNode;
}
export const ApiContext= createContext(PostsApi)

export const APiContextProvider=({children}:ApiContextProviderProps)=>{
    return(
        <ApiContext.Provider value={PostsApi}>
            {children}
        </ApiContext.Provider>
    )
}