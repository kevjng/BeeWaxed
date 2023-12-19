import LoginForm from "../../components/auth/LoginForm"
import RegistrationForm from "../../components/auth/RegistrationForm"

const LoginPage = () => {

    return (
        <div className="container m-auto grid-cols-2 grid gap-2">
            <LoginForm />
            <RegistrationForm/>
        </div>
    )
}

export default LoginPage