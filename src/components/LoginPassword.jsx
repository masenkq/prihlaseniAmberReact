function LoginPassword() {
    return (
        <>
            <label htmlFor="password">Heslo <span className="required">*</span></label>
            <div className="password-wrapper">
                <input type="password" id="password" name="password" placeholder="*******" required />
                <span className="toggle-password" id="toggle-password">👁️</span>
            </div>
        </>
    );
}

export default LoginPassword;
