

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";


export default function SearchBar() {
    return(
        <>
            <div className="relative stroke-gray-500 border-r border-transparent peer-focus:border-yellow-300 peer-focus:stroke-yellow-500">
                <input
                type="search"
                name="search"
                id="search"
                className="relative pl-12 pr-4 py-2 w-full peer z-10 h-10 focus:outline-none bg-transparent rounded-full border cursor-pointer outline focus:w-auto focus:border-yellow-300 focus:cursor-text focus:pl-12 focus:pr-4"
                placeholder="Search..."
            />
                <button type="submit" className="absolute inset-y-0 left-0 px-2 py-2">
                    <MagnifyingGlassIcon className="h-6 w-6" />
                </button>
            </div>
        </>

    )
}