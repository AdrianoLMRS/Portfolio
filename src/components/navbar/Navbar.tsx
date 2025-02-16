import { useEffect, useState } from 'react';
import navItems from '@utils/navItems';
import navData from './_data.tsx';
import { positionNavbar } from './_utils.tsx';
import { getCssVariable } from '@utils/misc';
import './index.scss';

function Navbar() {
    const [isSidebar, setIsSidebar] = useState(false);
    const mdBreakpoint : number = Number(getCssVariable('--md-breakpoint'));

    useEffect(() => {
        const handleResize = () => {
            setIsSidebar(window.innerWidth <= mdBreakpoint);
        };

        window.addEventListener('resize', handleResize);

        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mdBreakpoint]);

    return (
        <header>
            <nav className={isSidebar ? 'sidebar navigation' : 'navbar navigation'} id="navbar">
                {   navItems ( ...navData )    }
            </nav>
            <button onClick={positionNavbar} type="button" className="nav-btn" id="navBtn"></button>
            <hr className="header-hr" />
        </header>
    );
}

export default Navbar;
