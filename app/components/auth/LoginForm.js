"use client"
import React, { useState } from "react";
import Boton from "../ui/Boton";
import { useAuthContext } from "../../../contexts/AuthContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useRouter } from "next/navigation";

const LoginForm = () => {
    const { loginUser, googleLogin, createUser } = useAuthContext();
    const [isLogin, setIsLogin] = useState(true);
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            if (isLogin) {
                await loginUser(values);
            } else {
                await createUser(values);
                const user = await loginUser(values);
                if (!user.error) {
                    toast.success("Cuenta creada correctamente");
                    router.push("/");
                }
            }
        } catch (error) {
            /* toast.error(`Error: ${error.message}`); */
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="justify-center items-center mx-4">
            <div className="container text-center mt-4">
                <Boton onClick={() => setIsLogin((prev) => !prev)} className="!bg-gray-600">
                    <span className={isLogin ? "text-green-400" : "text-gray-400"}>Iniciar sesión</span> /{" "}
                    <span className={!isLogin ? "text-green-400" : "text-gray-400"}>Crear una cuenta</span>
                </Boton>
            </div>

            <form onSubmit={handleSubmit} className="container bg-gray-800 py-4 px-6 rounded-xl ">
                <h2>{isLogin ? "Login" : "Registro"}</h2>
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
                <Boton type="submit" className="mr-4 bg-green-400" disabled={isLoading}>
                    {isLoading ? "Cargando..." : isLogin ? "Ingresar" : "Registrarme"}
                </Boton>

                {isLogin && (
                    <Boton onClick={googleLogin} className="flex items-center !bg-red-700">
                        <FontAwesomeIcon icon={faGoogle} className="mr-2" />
                        Ingresar con Google
                    </Boton>
                )}
            </form>
        </div>
    );
};

export default LoginForm;