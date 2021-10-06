import React from 'react'

export const Footer = () => {
    const footerStyle = {
        position: "relative",
        top: "100vh",
        width: "100%",
        border: "3px solid yellow"
    }
    return (
        <footer className="bg-dark text-light py-2" style={footerStyle}>
            <p className="text-center">
                Copyright &copy; SSMojawat.com
            </p>
        </footer>
    )
}
