import React from 'react';
import { Link } from 'react-router-dom';
import Clock from './Clock';

function Header() {
    return (
        <header style={headerStyle}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/home">Home</Link> | <Link style={linkStyle} to="/about">About</Link> 
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    color: '#fff'
}

export default Header;