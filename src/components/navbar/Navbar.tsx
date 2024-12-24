import { navItems } from './navItems';
import './navbar.scss'

function Navbar() {
    return (
        <header>
            <nav className='navbar'>
            {navItems(
                { name: "Home", href: "/" },
                { name: "About", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Terminal", href: "/terminal" }
            )}
            </nav>
            <hr />
        </header>
    );
}

export default Navbar