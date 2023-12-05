"use client"

import { useRouter } from "next/navigation"

const GoBack = ({ ...args }) => {
    const router = useRouter()

    return (
        <button onClick={() => router.back()} {...args} className="rounded-lg py-2 px-4 bg-yellow-400 text-white text-center m-4">
            Volver
        </button>
    )
}

export default GoBack