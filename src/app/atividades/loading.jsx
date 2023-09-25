

import NavBar from '@/components/NavBar'

import SearchBar from "@/components/SearchBar";


import Atividade from './Atividade'
import { Button } from '@/components/Button';
import { getAtividades } from '@/actions/atividades';
import { Skeleton } from '@/components/ui/skeleton';




export default async function Atividades() {

  const data = Array(3).fill({})

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
          {data.map(() => {
            return(
                <div id="data-row" className="group flex justify-between items-center p-2 my-1 rounded cursor-pointer hover:bg-stone-600">
                    <div className="text-transform: capitalize">
                        <Skeleton className="h-8 w-32 bg-stone-600 rounded" />
                    </div>
                    <div className="flex items-center gap-6">
                        <Skeleton className="h-8 w-32 bg-stone-600 rounded" />
                        <Skeleton className="h-8 w-32 bg-stone-600 rounded" />
                        <Skeleton className="h-8 w-8 bg-stone-600 rounded" />
                    </div>
                </div>
            )
          })}
        </div>
      </main>
    </>
  )
}
