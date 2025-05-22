import mojeAmberKey from '../images/mojeAmberKey.svg';
import { toast } from 'react-toastify';
import LoginButtons from './LoginButtons';
import LoginEmail from './LoginEmail';
import LoginPassword from './LoginPassword';
import divider from './divider';
import Divider from "./divider";


const handleSubmit = (e) => {
    e.preventDefault(); // ← tohle zamezí přesměrování

};

function LoginForm() {
    return (
        <main className="login-container">
            <img src={mojeAmberKey} alt="Moje Amber" className="main-logo" />
            <form id="login-form" className="form-container" onSubmit={handleSubmit}>
                <LoginEmail />
                <LoginPassword />
                <LoginButtons />



            </form>
        </main>
    );
}

export default LoginForm;
