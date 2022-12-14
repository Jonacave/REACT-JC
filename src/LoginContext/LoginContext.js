import { createContext, useContext, useState } from "react";

export const LoginContext = createContext()

const usuarios = [
    {
        email: 'jonacave@hotmail.com',
        password: '1234'
    },
    {
        email: 'conrado@hotmail.com',
        password: '1234'
    },
    {
        email: 'prueba@hotmail.com',
        password: '1234'
    }
]

export const LoginProvider = ({ children }) => {

    const [user, setUser] = useState({
        user: '',
        logged: false
    })

    const login = (values) => {
        const match = usuarios.find(user => user.email === values.email)

        if (match) {
            if (match.password === values.pass) {
                setUser({
                    user: match.email,
                    logged: true
                })
            } else {
                alert("Password incorrecto")
            }
        } else {
            alert("Email incorrecto")
        }
    }

    const logout = () => {
        setUser({
            user: '',
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{ user, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}

export const useLoginContext = () => {
    return useContext(LoginContext)
}