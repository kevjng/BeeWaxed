"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/productos/todos", },
    { label: "Luminosas", href: "/productos/luminosas", },
    { label: "Galaxia", href: "/productos/galaxia", },
    { label: "Lisa", href: "/productos/lisa", },
    { label: "Vintage", href: "/productos/vintage", },
    { label: "Clasic", href: "/productos/clasic", }
]

const CategoriesMenu = () => {
    const pathname = usePathname()

    return (
        <aside className="flex flex-col gap-4 mx-6">
            {links.map(link => (
                <Link
                    key={link.label}
                    href={link.href}
                    className={`${pathname === link.href
                        
                        ? "font-semibold text-yellow-300 translate-x-2"
                        : ''} py-2 hover:translate-x-2 transition-all`
                    }
                >
                    {link.label}
                </Link>
            ))}
        </aside>
    )
}

export default CategoriesMenu