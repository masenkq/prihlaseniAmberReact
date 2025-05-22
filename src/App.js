import '../src/styles/main.css';
import Header from '../src/components/header';
import LoginForm from '../src/components/LoginForm';
import Footer from '../src/components/Footer';
import Toast from '../src/components/ToastContainer';
function App() {
    return (
        <>
            <Header />
            <LoginForm />
            <Footer />
            <Toast />
        </>
    );
}

export default App;
