import { useContext, useState } from "react"
import { LoginContext } from "../../LoginContext/LoginContext"

const LoginScreen = () => {

    const { login, user } = useContext(LoginContext)

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e) => {
        setPass(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login({
            email, pass
        })
    }
    return (
        <div style={{ backgroundColor: 'rgba(110, 188, 240, 0.699' }}>
            <form onSubmit={handleSubmit} className="container py-5">
                <input
                    type={'email'}
                    className='form-control my-3'
                    placeholder="Profe ingrese: conrado@hotmail.com"
                    value={email}
                    onChange={handleEmailChange}
                />
                <input
                    type={'password'}
                    className='form-control my-3'
                    placeholder="Profe ingrese: 1234"
                    value={pass}
                    onChange={handlePassChange}
                />
                <button className="btn btn-primary" type="submit"> Ingresar</button>
            </form>
        </div>
    )
}

export default LoginScreen