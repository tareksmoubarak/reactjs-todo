import React from 'react';
import Clock from './Clock';

function Footer() {
    return (
        <footer style={footerStyle}>
            <Clock />
        </footer>
    )
}

const footerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Footer;