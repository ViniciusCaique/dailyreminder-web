"use client"

import { Button } from "@/components/Button";
import TextField from "@/components/TextField";
import Image from "next/image";

import loginImage from "@/images/login.jpg"
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";


export default function Login() {

    const { register, handleSubmit } = useForm()
    const { login } = useContext(AuthContext)
    const { push } = useRouter()

    async function onSubmit(data) {
        const res = await login(data)

        if(res?.error) {
            toast.error(res.error)
            return
        }

        push("/")
    }

    return(
        <div className="flex h-screen">
            <aside className="hidden lg:flex">
                <Image src={loginImage} className="h-full w-full object-cover" />
            </aside>
            <main className="flex flex-col items-center justify-center w-full">
                <h1 className="text-5xl font-bold">Daily</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-3 max-w-md">
                    <TextField register={register} label="email" name="email"/>
                    <TextField register={register} label="senha" name="senha" type="password"/>

                    <Button type="button">entrar</Button>
                </form>
            </main>
        </div>
    )
}