import React, { createContext, useContext, useState } from "react";

export const UserPlateContext = createContext()

export default function UserPlateProvider({children}){
    const [plate,setPlate]=useState('')
    return(
        <UserPlateContext.Provider value={{plate,setPlate}}>
            {children}
        </UserPlateContext.Provider>
    )
}

export function usePlate(){
    const context= useContext(UserPlateContext)
    const {plate,setPlate}=context
    return {plate,setPlate}
}