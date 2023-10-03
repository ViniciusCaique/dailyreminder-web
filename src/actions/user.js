"use server"


import { cookies } from 'next/headers'

const url = process.env.NEXT_PUBLIC_BASE_URL + "/login"


export async function apiLogin(credentials) {

    const options = {
        method: POST,
        body: JSON.stringify(credentials),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await fetch(url, options)

    if (res.status !== 200) return {error : "credenciais inválidas"}

    const json = await res.json() 

    cookies().set('dailyToken', json.token, {
        maxAge: 60 * 60 * 24 * 7 // 7 dias
    })
    
}

export async function apiLogout() {
    cookies().delete('dailyToken')
}