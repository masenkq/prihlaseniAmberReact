import React from 'react';
import { Input } from 'antd';

function LoginEmail() {
    return (
        <>
            <label htmlFor="email">Email <span className="required">*</span></label>
            <Input
                id="email"
                name="email"
                type="email"
                placeholder="zadejte email"
                required
            />
        </>
    );
}

export default LoginEmail;
