import React from 'react'
const AuthLayout = (props) => {
    return (
        <main className="auth-content">
            <section className="auth-form-section">
                {props.children}
            </section>
        </main>
    )
}

export default AuthLayout
