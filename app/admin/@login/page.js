import LoginForm from "../../components/auth/LoginForm"


const LoginPage = () => {

    return (
        <div className="container my-20 justify-center h-screen">

            <div className="p-8 rounded-md justify-center text-center">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-300 sm:text-4xl mt-20">Panel de Admin de BeeWaxed</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-400">Logueate, o Registrate para ingresar.</p>
                </div>
            </div>

            <LoginForm />
            
        </div>
    )
}

export default LoginPage