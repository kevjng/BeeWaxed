"use client"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { useAuthContext } from "../../../contexts/AuthContext";
import Boton from "../ui/Boton";

const LogoutButton = () => {
    const { logout } = useAuthContext();

    return (
        <>
            <Boton onClick={logout} className="!bg-red-500">
                <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />
                Cerrar sesión
            </Boton>
        </>
    );
};

export default LogoutButton;
