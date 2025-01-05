import { sleep } from "@utils/misc";

export const positionNavbar = async (): Promise<void> => {
    try {
        const nav = document.getElementById('navbar');
        const btn = document.getElementById('navBtn');

        if (!nav || !btn) {
            console.error('Navbar or button not found.');
            return;
        }

        const isNavOpen = nav.style.right === '0px';

        if (!isNavOpen) {
            nav.style.transition = 'right 300ms ease-in';
            nav.style.right = '0';
            btn.style.right = '90vw';
        } else {
            nav.style.right = '-90vw';
            btn.style.right = '0';
            await sleep(300);
            nav.style.transition = ''; // Clear transition after animation
        }
    } catch (error) {
        console.error('An error occurred in positionNavbar:', error);
    }
};