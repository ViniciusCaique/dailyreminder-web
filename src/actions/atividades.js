"use server"

import { revalidatePath } from "next/cache"

export async function create(formData) {

    
    const url = "http://localhost:8080/api/atividades"

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