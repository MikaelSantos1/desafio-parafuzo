import React, { createContext, useContext, useState } from "react";

export const RegisterDetailsContext = createContext()

export default function RegisterDetailsProvider({children}){
    const [registerDetails,setRegisterDetails]=useState({})
    return(
        <RegisterDetailsContext.Provider value={{registerDetails,setRegisterDetails}}>
            {children}
        </RegisterDetailsContext.Provider>
    )
}

export function useRegisterDetails(){
    const context= useContext(RegisterDetailsContext)
    const {registerDetails,setRegisterDetails}=context
    return {registerDetails,setRegisterDetails}
}