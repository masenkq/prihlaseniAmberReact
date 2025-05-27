import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import './styles/main.css'

function App() {
    return (
        <BrowserRouter basename={"/stepama/"}>
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<LoginForm/>}/>
                    <Route path="/HomePage" element={<HomePage/>}/>
                    {/* další routy */}
                </Routes>
            </main>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;