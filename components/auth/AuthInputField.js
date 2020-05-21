
const AuthInputField = ({ type, name, value, handleChange, placeholder, error, icon, children, ...rest }) => {
    return (
        <div className={error ? 'form-group error' : 'form-group'}>
            <div className="form-input-field">
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    placeholder={placeholder}

                    {...rest}
                />
                {children}
            </div>
            {error && <span className="error-feedback">{error}</span>}
        </div>
    )
}

export default AuthInputField
