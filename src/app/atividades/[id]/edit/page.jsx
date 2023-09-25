

import NavBar from "@/components/NavBar";

import FormEdit from "./Form";
import { getAtividade } from "@/actions/atividades";



export default async function FormPacotes({ params }) {

    const atividade = await getAtividade(params.id)
    console.log(atividade)



    return (
        <>
            <NavBar active="atividades" />
            <FormEdit atividade={atividade} />
        </>
    ) 
}
 