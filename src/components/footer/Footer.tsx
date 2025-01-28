import navItems from '@utils/navItems';
import socialData from '@components/main/sections/home/_socialData';
import links from '@data/links';

import './index.scss';

function Footer() {
    return(
        <footer className='footer'>
            <p>Desenvolvido por <a href={links.github} target='_blank'>Adriano Rossi</a><br>
            </br>&copy; 2025</p>
            <div className="social">
                {navItems(...socialData)}
            </div>
        </footer>
    );
}

export default Footer;