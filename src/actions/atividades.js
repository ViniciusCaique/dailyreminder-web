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
    await new Promise(r => setInterval(r, 5000));
    const res = await fetch(url, { next: { revalidate: 0 }})
    if(!res.ok) {
        throw new Error('Erro ao obter dados das atividades')
    }
    return res.json()
}

export async function getAtividade(id) {
    const getUrl = url + "/" + id

    const res = await fetch(getUrl)

    if(res.status !== 200) 
        return { error: "Erro ao buscar atividade. " + res.status}

    return await res.json()

}

export async function updateAtividade(atividade) {
    const updateUrl = url + "/" + atividade.id

    const options = {
        method: "POST",
        // body: JSON.stringify(data),
        body: JSON.stringify( Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const res = await fetch(updateUrl, options)

    if(res.status !== 200) 
        return { 
            error: `Erro ao atualizar. + ${res.status}`
        }

    revalidatePath("/atividades")
}

export async function deleteAtividade(id) {
    const deleteUrl = url + "/" + id

    const options = {
        method: "DELETE",
    } 

    const res = await fetch(deleteUrl, options)

    if(res.status !== 204) 
        return { error: "Erro ao apagar atividade. " + res.status}

    revalidatePath("/atividades")

}