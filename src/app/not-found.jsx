
import NavBar from "@/components/NavBar";
import Link from "next/link";


export default function NotFound() {
    <>
        <NavBar />

        <main>
            <h1>404 - Página nao encontrada</h1>
            <Link href="/">Return Home</Link>
        </main>
    </>
}