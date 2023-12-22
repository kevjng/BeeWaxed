"use client"

import React, { useState } from "react";
import Boton from "../ui/Boton";
import { useAuthContext } from "../../../contexts/AuthContext";


const RegistrationForm = () => {
    const { createUser } = useAuthContext();
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value,
        });
    };

   

    return (
        <div className="inset-0 z-10 flex justify-center items-center my-10">
            <form onSubmit={handleSubmit} className="bg-gray-800 py-4 px-6 rounded-xl max-w-md w-full">
                <h2>Registro</h2>
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
                <Boton type="submit" className="mr-4 !bg-green-600" disabled={isLoading}>
                    {isLoading ? "Cargando..." : "Registrarme"}
                </Boton>
            </form>
        </div>
    );
};

export default RegistrationForm;