"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/atividades"

export async function create(formData) {

    const options = {
        method: "POST",
        // body: JSON.stringify(data),
        body: JSON.stringify( Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    } 
    
    const res = await fetch(url, options)
    const json = await res.json()
    if(res.status !== 201) {
        console.log(json)
        const errors = json.reduce((str, err) => str += err.message + ". ", "")
        return{
            message: `erro ao cadastrar ${res.status} - ${errors}`
        }
    }

    revalidatePath("/atividades")
    return{ ok: 'ok' }
}

export async function getAtividades() {
    const res = await fetch(url, { next: { revalidate: 0 }})
    if(!res.ok) {
        throw new Error('Erro ao obter dados das atividades')
    }
    return res.json()
}