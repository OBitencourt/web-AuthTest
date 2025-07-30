import React, { createContext, useContext, useState } from "react";
import { useCookies } from 'react-cookie'


type Props = {
    children: React.ReactNode
}

type User = {
    _id: string
    name: string
    email: string
    password: string
}

type AuthContextType = {
    login: (user: User, token: string) => string
    logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthContextProvider = ({ children }: Props) => {
    const [cookies, setCookie, removeCookie] = useCookies(['token', 'user']);

    const login = (user: User, token: string) => {

        setCookie('token', token, { path: '/'})
        setCookie('user', user, { path: '/'})

        return 'User logged with success'

    }

    const logout = () => {

        removeCookie('token', { path: '/'} )
        removeCookie('user', { path: '/'} )
    }

    return (
        <AuthContext.Provider value={{login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {

    const context = useContext(AuthContext)
    
    if(!context) {
        throw new Error("useAuth must be used within an AuthContextProvider")
    }

    return context
}