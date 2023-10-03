"use client"

import { AuthContext } from "@/contexts/AuthContext";
import Link from "next/link";
import { useContext } from "react";
import { Button } from "./Button";
import { useRouter } from "next/navigation";





export default function NavBar({ active }) {

    const { user, logout } = useContext(AuthContext)
    const { push } = useRouter()

    function handleLogout() {
        logout()
        push("/login")
    }

    return(
        <nav className="flex justify-between items-center px-4 py-4 bg-stone-900">
            <ul className="flex gap-12 items-baseline text-stone-600 font-medium">
                <li>
                    <Link href='/'>
                        <h1 className="text-2xl text-yellow-300 font-bold">DailyReminder</h1>
                    </Link>
                </li>
                <li>
                    <Link className={active=="atividades" && "text-yellow-500"} href='/atividades'>
                        Atividades
                    </Link>
                </li>
                <li>
                    <Link className={active=="lembretes" && "text-yellow-500"} href='/lembretes'>
                        Lembretes
                    </Link>
                </li>
            </ul>

            <div className="flex items-center gap-2">
                <span>{user?.email}</span>
                <div className="h-12 w-12 rounded-full overflow-hidden">
                    <img src="https://i.pravatar.cc/300" alt="usuario" />
                </div>

                <Button onClick={handleLogout} type="button">logout</Button>
            </div>
        </nav>

    )
}