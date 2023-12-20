"use client"

import { auth } from "../firebase/config";
import { signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import { useRouter } from "next/navigation"


const AuthContext = createContext();
export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        logged: false,
        email: null,
        uid: null,
    });

    const router = useRouter()

    const [isRegistered, setIsRegistered] = useState(false);

    const createUser = async (values) => {
        try {
            await createUserWithEmailAndPassword(auth, values.email, values.password);
            setIsRegistered(true);
            toast.success(`Usuario registrado! Inicie sesion con ${values.email} y su contraseña.`);

        } catch (error) {
            toast.error(`Error al crear usuario: ${error.message}`);
        }
    };

    const loginUser = async (values) => {
        try {
            await signInWithEmailAndPassword(auth, values.email, values.password);
            toast.success(`Inicio de sesión exitoso!`)
        } catch (error) {

            toast.error(`Error al iniciar sesión: ${error.message}`);
        }
    };


    const logout = () => {
        try {
            signOut(auth);
            toast.success("Cierre de sesión exitoso");
        } catch (error) {
            toast.error(`Error al cerrar sesion: ${error.message}`)

        }
    };

    useEffect(() => {
        onAuthStateChanged(auth, async (user) => {

            if (user) {
                const docRef = doc(db, "roles", user.uid)
                const userDoc = await getDoc(docRef)

                if (userDoc.data()?.rol === "admin") {
                    setUser({
                        logged: true,
                        email: user.email,
                        uid: user.uid
                    })
                } else {
                    router.push("/noAutorizado")
                    logout()
                }

            } else {
                setUser({
                    logged: false,
                    emaiL: null,
                    uid: null
                })
            }
        })
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                createUser,
                loginUser,
                logout,
            }}
        >
            {children}
            <ToastContainer />
        </AuthContext.Provider>
    );
};
