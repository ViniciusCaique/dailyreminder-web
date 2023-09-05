

import DropMenu from "@/components/DropMenu"

export default function Atividade({ atividade }){

    console.log(atividade)
    return(
        <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-stone-600">
            <div>
                <span>{atividade.atividade}</span>
            </div>
            <div className="flex items-center">
                <div className="invisible group-hover:visible">
                    <DropMenu />
                </div>
            </div>
        </div>
    )
}