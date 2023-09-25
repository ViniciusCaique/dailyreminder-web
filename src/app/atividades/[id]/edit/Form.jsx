"use client"

import TextField from "@/components/TextField";
// import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { redirect } from 'next/navigation'
import { create, getAtividade, updateAtividade } from "@/actions/atividades";
import DatePicker from "@/components/DatePicker";
import { Button } from "@/components/Button";


export default function FormEdit({ atividade }) {

    const [ error, setError ] = useState("")
    const  [ atividadeEdit, setAtividadeEdit ] = useState(atividade)

    async function handleSubmit() {
        const res = await updateAtividade(atividadeEdit)
        if(res?.error) {
            setError(res.error)
            return
        }
        redirect("/atividades")
    }

    function handleFieldChange(field, value) {
        setAtividadeEdit({
            ...atividadeEdit,
            [field]: value
        })
    }


    return(
        <main className="bg-stone-900 mt-10 m-auto max-w-xl p-8 rounded flex gap-3 flex-col">
            <form action={handleSubmit}>
            <h1 className="text-2xl">Editar Atividade</h1>
            <TextField 
                label="Atividade"
                id="atividade"
                name="atividade"
                value={atividadeEdit.atividade}
                onChange={() => handleFieldChange("atividade", e.target.value)}
            />
            <TextField 
                label="Duração"
                id="duracao"
                name="duracao"
                value={atividadeEdit.duracao}
                onChange={() => handleFieldChange("atividade", e.target.value)}
            />
            <DatePicker 
                label="Dia"
                id="dataDia"
                name="dataDia"
                value={atividade.dataDia}
                onChange={() => handleFieldChange("atividade", e.target.value)}
            />
            <div className="flex justify-around mt-4">
                <Button href="/atividades" variant="secondary">Cancelar</Button>
                <Button type="button">
                    Cadastrar
                </Button>
            </div>

            <span className="text-red-500">{error}</span>

            </form>
        </main>
    )
}