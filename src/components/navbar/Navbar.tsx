import { navItems } from './navItems';
import './navbar.scss'

const positionNavbar = async () => {
    const nav = document.getElementById('navbar');
    const btn = document.getElementById('navBtn');
    if (nav && btn) {
        if (nav.style.right !== '0px') {
            nav.style.right = '0';
            btn.style.right = '400px';
        } else {
            nav.style.right = '-400px';
            btn.style.right = '0';
        }
    } else console.log('Navbar not found...');
};


function Navbar() {

    return (
        
        <header>
            <nav className='sidebar' id='navbar'>
            {navItems(
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Terminal", href: "/terminal" }
                )}
            </nav>
            <button onClick={positionNavbar} type="button" className="nav-btn" id='navBtn'></button>
            <hr className='header-hr' />
        </header>
    );
}

export default Navbar