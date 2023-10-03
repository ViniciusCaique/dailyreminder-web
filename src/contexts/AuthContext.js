"use client"

import { apiLogin, apiLogout } from "@/actions/user";

const { createContext, useState } = require("react");



export const AuthContext = createContext({})

export function AuthProvider({children}) {

    const [ user, setUser ] = useState(null)

    async function login(credentials) {

        const res = await apiLogin(credentials)

        if(res?.error) return res.error

        setUser({
            nome: "Vinicius",
            email: credentials.email
        })
    }

    function logout() {
        apiLogout()
        setUser(null)
    }

    return(
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}