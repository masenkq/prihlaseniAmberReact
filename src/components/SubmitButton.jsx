import { Button } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';

function SubmitButton() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault(); // zabrání reloadu
        // můžeš tu přidat validaci nebo fetch
        navigate('/HomePage'); // přesměrování
    };

    return (
        <Button type="primary" htmlType="submit" onClick={handleClick}>
            Přihlásit se
        </Button>
    );
}

export default SubmitButton;
