import React from "react";
import "./styles.css";

interface LoginProps {
    email: string,
    password: string,
}
function Login(props: LoginProps) {
    return (<div className="card">
           <div className="form_row">
           <label htmlFor="email">Email</label>
           <input className="form__input" type="text" name="email"/>
        </div> 
           <div className="form_row">
           <label htmlFor="password">Contraseña</label>
           <input className="form__input" type="text" name="password" />        
            <input type="button" value="Entrar" /> 
            </div>
        </div>);
}

export default Login;
