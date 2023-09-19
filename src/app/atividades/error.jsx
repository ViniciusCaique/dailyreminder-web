'use client'

import NavBar from "@/components/NavBar"
import { Button } from '@/components/Button';


 

 
export default function Error({ error, reset }) {
  return (

    <>
        <NavBar active={"atividades"}/>

        <main className="bg-stone-900 mt-10 m-auto max-w-lg p-8 rounded">
            <div className="flex flex-col gap-3 justify-between items-center">
                <h1 className="text-2xl font-bold">Ops! um erro aconteceu: {error.message}</h1>
                <Button onClick={() => reset()} type="button">
                    Tentar novamente
                </Button>
            </div>
        </main>
    </>
  )
}