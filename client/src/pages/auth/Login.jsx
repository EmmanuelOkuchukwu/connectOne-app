import React, { useState } from 'react';
import './auth.scss';
import LoginImage from '../../assets/images/undraw_secure_login_pdn4.svg';
import { Auth } from '../../api/auth';
import { useNavigate, Navigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const initialValues = {
        username: '',
        password: ''
    }
    const [loginValues, setLoginValues] = useState(initialValues)

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setLoginValues({ ...loginValues, [name]: value });
    }

    const handleLogin = (evt) => {
        evt.preventDefault();
        const formData = {
            username: loginValues?.username,
            password: loginValues?.password,
        }
        Auth.onLogin(formData).then((response) => {
            // console.log(response?.data);
            navigate('/feed');
        }).catch((error) => {
            console.log(error);
        })
    }

    if(Auth.getToken()) {
        return <Navigate to={{ pathname: "/feed" }} />
    }

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
                    <form className="auth__form" onSubmit={handleLogin}>
                        <h3 className="auth__title">Login to get access</h3>
                        <label htmlFor="username">Username:</label>
                        <input type="text" className="auth__input" placeholder="johnnyboy97" name="username" value={loginValues?.username} onChange={handleChange} />
                        <label htmlFor="password">Password:</label>
                        <input type="password" className="auth__input" placeholder="******************" name="password" value={loginValues?.password} onChange={handleChange} />
                        <label htmlFor="">Reveal Password</label><input type="checkbox" />
                        <button className="auth__btn">Login</button>
                    </form>
                    <div className="divider">
                        <span />
                            <span>Need an account?</span>
                        <span />
                    </div>
                    <div style={{padding: '0 55px', margin: "0 auto"}}>
                        <button type="submit" className="join__btn">Join here</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
