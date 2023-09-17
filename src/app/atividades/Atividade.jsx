

import DropMenu from "@/components/DropMenu"

export default function Atividade({ atividade }){

    // console.log(atividade)
    return(
        <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-stone-600">
            <div className="text-transform: capitalize">
                <span>{atividade.atividade}</span>
            </div>
            <div className="flex items-center gap-6">
                {!atividade.lembrete?.mensagem ? null : <span>{atividade.lembrete.mensagem}</span>}
                <span>{atividade.dataDia}</span>
                <div className="invisible group-hover:visible">
                    <DropMenu />
                </div>
            </div>
        </div>
    )
}