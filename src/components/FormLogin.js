import React from 'react'
import './FormLogin.css'

export default () => {
    return (
        <div className="container">
            <div className="form-box">
                <h1 className="title-login">LOGIN</h1>

                <input type="email" placeholder="E-mail" className="form"/>

                <input type="password" placeholder="Password" className="form"/>

                <button className="btn">Enviar</button>
            </div>
        </div>
    )
}