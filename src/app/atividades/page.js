

import NavBar from '@/components/NavBar'

import SearchBar from "@/components/SearchBar";


import Atividade from './Atividade'
import { Button } from '@/components/Button';
import { getAtividades } from '@/actions/atividades';




export default async function Atividades() {

  // const data = [
  //   {
  //     "id": 1,
  //     "duracao": 60,
  //     "data": "2023-08-30",
  //     "atividade": "estudar",
  //     "created_at": "2023-08-30",
  //     "lembrete": {
  //         "id": 1,
  //         "mensagem": "Estudar java",
  //         "duracao": 60
  //     }
  //   },
  //   {
  //     "id": 2,
  //     "duracao": 30,
  //     "data": "2023-08-30",
  //     "atividade": "treinar",
  //     "created_at": "2023-08-30",
  //     "lembrete": {
  //         "id": 3,
  //         "mensagem": "Treinar costas",
  //         "duracao": 60
  //     }
  //   },
  //   {
  //     "id": 4,
  //     "duracao": 20,
  //     "data": "2023-08-30",
  //     "atividade": "correr",
  //     "created_at": "2023-08-30",
  //     "lembrete": null,
  //   }
  // ]

  const data = await getAtividades()

  return (
    <>
      <NavBar active={"atividades"}/>

      <main className="bg-stone-900 mt-10 m-auto max-w-screen-lg p-8 rounded">
        <h1 className="text-2xl font-bold">Atividades</h1>

        <div className="flex justify-between items-end gap-6 ">
          <SearchBar />
          <Button href="/atividades/new">
              New
          </Button>
        </div>

        
        <hr class="w-auto h-1 mx-auto my-2 border-0 rounded bg-zinc-200" />

        <div id="data">
          {data.map(atividade => <Atividade key={atividade.id} atividade={atividade} />)}
        </div>
      </main>
    </>
  )
}
