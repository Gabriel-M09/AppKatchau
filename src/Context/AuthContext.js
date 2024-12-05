import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(false);
    const [carrinho, setCarrinho ] = useState([]);

    async function Login(email, cpf) {

        if (email != "" && senha != "") {
            await fetch('http://10.133.22.21:5251/api/Cliente/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    emailCliente: email,
                    cpfCliente: cpf
                })
            })
                .then(res => res.json())
                .then(json => {
                    console.log( json );
                    setLogado((json.token) ? true : false);
                    setError((json.token) ? false : true);
                }
                )
                .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error, carrinho: carrinho , setCarrinho }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;