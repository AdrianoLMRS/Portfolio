import React from 'react'
import './header.scss'

function Header() {
    return (
        <header>
            <nav className='navbar'>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    );
}

export default Header