import React from 'react';
import ReactDOM from 'react-dom/client';
import {ConfigProvider} from 'antd';
import App from './App';

const theme = {
    token: {
        colorPrimary: '#c0004d',         // hlavní barva
        colorPrimaryHover: '#004d80', // barva při hoveru
        colorText: '#000',
        borderRadius: 8,
        fontWeightStrong: 600,
        // přidej další tokeny pokud chceš ladit i pozadí, border atd.
    }
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ConfigProvider theme={theme}>
            <App/>
        </ConfigProvider>
    </React.StrictMode>
);
