/**
 * A button for the user go to the inital in the page ( /# )
 */

import { useEffect, useState } from 'react';
import './backToHome.scss';

export default function BackToHome() {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowButton(window.scrollY > 1);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup 
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="widget backHome">
            {showButton && (
                <a className="button1" href="#">
                    &uarr;
                </a>
            )}
        </div>
    );
};