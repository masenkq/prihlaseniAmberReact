function LoginEmail() {
    return (
        <>
            <label htmlFor="email">Email <span className="required">*</span></label>
            <input type="email" id="email" name="email" placeholder="zadejte email" required />
        </>
    );
}

export default LoginEmail;
