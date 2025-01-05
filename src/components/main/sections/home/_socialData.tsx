import links from '@utils/links';

type params = {
    htmlTag: any; 
    href: string; 
    className: string;
    src: string; 
    alt: string; 
}

type socialDataType = Array< params > ; // Need Array (ts is strange...)

const html = 'img' // <img> tag in HTML
const l = links; // Links shortcut
const c : string = 'icon'; // Class name
const size : string = '48'; // Size of icons in pixels

const socialData: socialDataType = [
    { htmlTag: html, href: l.github, className: c, src: `https://img.icons8.com/ios-glyphs/${size}/github.png`, alt: 'githubIcon' },
    { htmlTag: html, href: l.linkedin, className: c, src: `https://img.icons8.com/ios-glyphs/${size}/linkedin.png`, alt: 'linkedinIcon' },
    { htmlTag: html, href: l.email, className: c, src: `https://img.icons8.com/ios-filled/${size}/new-post.png`, alt: 'emailIcon' },
    { htmlTag: html, href: l.phone, className: c, src: `https://img.icons8.com/ios-filled/${size}/phone.png`, alt: 'phoneIcon' }
];

export default socialData;