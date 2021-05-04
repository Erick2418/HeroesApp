import React from 'react'

export const LoginScreen = ({history}) => {
    const handleLogin=()=>{
        /* History permite redireccionar a otra pagina desde una funcion? */
       // history.push('/');
        /* Permite que no se vuelva a mostrar el login hasta que le demos a Logout
        reemplaza el historial, como si no toco el login, si no que se fue a antes de eso
        */
        history.replace('/');
    }
    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr/>
            <button
                className="btn btn-primary"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    )
}
