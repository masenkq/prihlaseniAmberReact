import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ApiPostsPage from './pages/ApiPostsPage';
import '../src/styles/main.css';
function App() {
    return (
        <Router basename="/stepama">
            <Header />
            <Routes>
                <Route path="/" element={<LoginForm />} />
                <Route path="/HomePage" element={<HomePage />} />
                <Route
                    path="/api-posts"
                    element={
                        <ApiPostsPage
                            apiUrl="https://jsonplaceholder.typicode.com/posts"
                            title="API Příspěvky"
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;