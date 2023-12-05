"use client";
import { useState } from "react";
import { Button, Input, Textarea } from "@nextui-org/react";

const ContactForm = () => {
    const initialState = {
        nombre: "",
        email: "",
        numero: "",
        mensaje: "",
    };

    const [values, setValues] = useState(initialState);
    const [isFormValid, setIsFormValid] = useState(false);

    const handleChange = (e) => {
        const updatedValues = {
            ...values,
            [e.target.name]: e.target.value,
        };
        setValues(updatedValues);
        setIsFormValid(
            Object.values(updatedValues).every((value) => value.trim() !== "")
        );
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!isFormValid) {
            // Mostrar un mensaje de error o realizar otra acción apropiada.
            return;
        }

        await fetch("http://localhost:3000/api/contacto", {
            method: "POST",
            body: JSON.stringify(values),
        });

        // Restablecer el formulario después de enviar
        setValues(initialState);
        setIsFormValid(false);
    };

    const handleClear = () => {
        setValues(initialState);
        setIsFormValid(false);
    };

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="mx-auto">
                <h3 className="text-default-400 text-large">Datos de contacto:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-4 justify-between">
                    <Input
                        type="text"
                        label="Nombre"
                        labelPlacement="inside"
                        description="Ingresa tu Nombre"
                        name="nombre"
                        className="my-2"
                        onChange={handleChange}
                        value={values.nombre}
                    />
                    <Input
                        type="email"
                        label="Email"
                        labelPlacement="inside"
                        description="Ingresa tu email"
                        className="my-2"
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                    />
                    <Input
                        type="number"
                        label="Numero"
                        labelPlacement="inside"
                        description="Ingresa tu Numero"
                        name="numero"
                        onChange={handleChange}
                        value={values.numero}
                    />
                </div>

                <h3 className="text-default-400 text-large">Mensaje:</h3>

                <Textarea
                    label="Déjanos tu mensaje"
                    placeholder=""
                    className="my-4"
                    name="mensaje"
                    onChange={handleChange}
                    value={values.mensaje}
                />

                <div className="flex flex-wrap justify-center">
                    <Button
                        type="button"
                        onClick={handleClear}
                        className="bg-red-600 text-white my-4 mx-2 w-2"
                    >
                        Borrar
                    </Button>
                    <Button
                        type="submit"
                        className={`${isFormValid ? "bg-yellow-500" : "bg-gray-500"
                            } text-white my-4 mx-2 w-2`}
                        disabled={!isFormValid}
                    >
                        Enviar
                    </Button>
                </div>
            </form>
        </div>
    );
};

export default ContactForm;
