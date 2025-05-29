import React from 'react';
import { Link } from 'react-router-dom';

function ForgotPasswordLink() {
    return (
        <Link to="/" className="forgot-password">
            🔐 Zapomenuté heslo
        </Link>
    );
}

export default ForgotPasswordLink;
