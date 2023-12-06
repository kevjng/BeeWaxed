"use client"

import { useRouter } from "next/navigation"

const GoBack = ({ ...args }) => {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} {...args} className="rounded-lg py-2 px-4 bg-yellow-500 text-white text-center m-4
         hover:bg-green-700 hover:translate-x-1 hover:scale-98 transition-all">
            Volver
        </button>
    )
}

export default GoBack