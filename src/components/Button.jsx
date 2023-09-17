

import Link from "next/link";

export function Button({ children, variant="primary", type="link", ...props }) {

    const styles = {
        primary: "bg-yellow-400 hover:bg-yellow-600",
        secondary: "border-2 border-stone-500 hover:bg-stone-800"
    }

    const variantClass = `flex gap-1 py-2 p-4 py-2 mt-5 rounded ${styles[variant]} `

    return(
        <>
        {
            type === 'link' ? 
                <Link href="#" {...props} className={variantClass}>
                {children}
                </Link>
            :
            <button {...props} className={variantClass}>
            {children}
            </button>
        }

        </>
    )
}