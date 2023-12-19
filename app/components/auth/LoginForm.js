"use client"
import { useState } from "react"
import Boton from "../ui/Boton"
import { useAuthContext } from "../../../contexts/AuthContext"

const LoginForm = () => {
    const { createUser, loginUser } = useAuthContext()
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <div className="inset-0 z-10 flex justify-center items-center h-screen">
            <form onSubmit={handleSubmit} className="bg-gray-800 py-4 px-6 rounded-xl max-w-md w-full">
                <h2>Login</h2>
                <input
                    type="email"
                    value={values.email}
                    required
                    placeholder="Email"
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-black"
                    name="email"
                    onChange={handleChange}
                />
                <input
                    type="password"
                    value={values.password}
                    required
                    placeholder="Password"
                    className="p-2 rounded w-full border border-blue-100 block my-4 text-black"
                    name="password"
                    onChange={handleChange}
                />
                <Boton onClick={() => loginUser(values)} className="mr-4">Ingresar</Boton>
                <Boton onClick={() => createUser(values)}>Registrarme</Boton>
                {/* <Boton onClick={null} className="mt-2 block">Ingresar con Google</Boton> */}
            </form>
        </div>
    )
}

export default LoginForm