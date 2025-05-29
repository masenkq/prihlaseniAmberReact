import React from 'react';
import {useNavigate} from 'react-router-dom';
import mojeAmberKey from '../images/mojeAmberKey.svg';

import LoginButtons from './LoginButtons';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';
import 'antd/dist/reset.css';

function LoginForm() {
    const navigate = useNavigate(); // 💡 Hook musí být tady, uvnitř komponenty

    const handleSubmit = (e) => {
        e.preventDefault();
        // sem patří validace / autentifikace atd.
        navigate('/home'); // použij malá písmena pokud máš <Route path="/home" />
    };

    return (
        <main className="login-container">
            <img src={mojeAmberKey} alt="Moje Amber" className="main-logo"/>
            <form id="login-form" className="form-container" onSubmit={handleSubmit}>
                <LoginEmail/>
                <LoginPassword/>
                <LoginButtons/>
            </form>
        </main>
    );
}

export default LoginForm;
