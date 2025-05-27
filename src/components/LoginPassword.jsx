import React, {useState} from 'react';
import {EyeOutlined, EyeInvisibleOutlined} from '@ant-design/icons';
import { Input } from 'antd';

function LoginPassword() {
    const [visible, setVisible] = useState(false);

    const toggleVisibility = () => {
        setVisible((prev) => !prev);
    };

    return (
        <>
            <label htmlFor="password">Heslo <span className="required">*</span></label>

            <Input
                id="password"
                name="password"
                placeholder="*******"
                type={visible ? "text" : "password"}
                maxLength={10}
                showCount
                suffix={
                    visible ? (
                        <EyeInvisibleOutlined onClick={toggleVisibility} style={{cursor: "pointer"}}/>
                    ) : (
                        <EyeOutlined onClick={toggleVisibility} style={{cursor: "pointer"}}/>
                    )
                }
                required
            />
        </>
    );
}

export default LoginPassword;
