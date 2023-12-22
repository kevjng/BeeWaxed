"use client"
import Link from "next/link"
import Image from "next/image"

const AdminWidget = () => {
    

    return (
        <Link href={"/admin"} className={``}>
            <Image
                src={"/icons/admin.svg"}
                alt="Admin icon"
                width={30}
                height={30}
                className="invert"
            />
          
        </Link>
    )
}

export default AdminWidget