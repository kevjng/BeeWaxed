"use client"
import { useAuthContext } from "../../contexts/AuthContext"

const AdminLayout = ({ children, login }) => {
    const isLoggedIn = true

    return (
        <div>
            { isLoggedIn ? children : login}
        </div>
    )
}

export default AdminLayout