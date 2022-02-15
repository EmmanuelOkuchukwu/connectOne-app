import React from 'react';
import './auth.scss';
import LoginImage from '../../assets/images/undraw_secure_login_pdn4.svg';

function Login() {
    return (
        <div className="auth">
            <div className="auth__banner" />
            <div className="auth__background">
                <div className="auth__info">
                    <div>
                        <h3 className="auth__title">ConnectOne</h3>
                        <div className="info-image-container">
                            <img src={LoginImage} alt="" width="600" height="400" className="image"/>
                        </div>
                    </div>
                </div>
                <div className="auth__form__background">
                    <form className="auth__form">
                        <h3 className="auth__title">Login to get access</h3>
                        <input type="text" className="auth__input" placeholder="Username"/>
                        <input type="text" className="auth__input" placeholder="Password"/>
                        <button className="auth__btn">Login</button>
                    </form>
                    <div className="divider">
                        <span />
                            <span>Need an account?</span>
                        <span />
                    </div>
                    <div style={{ width: '60%', margin: "0 auto"}}>
                        <button className="join__btn">Join here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;