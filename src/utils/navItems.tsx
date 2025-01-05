import React from "react"; // ! Require React

// NavItem type
type NavItem = { 
    htmlTag: keyof JSX.IntrinsicElements; 
    name?: string; 
    [key: string]: any; // Permite propriedades adicionais
};

/**
 * Creates a navigation menu with the provided items.
 *
 * @param items - Multiple objects representing the navigation items. Each object should have a `name` (string), `href` (string), and optional `dataContent` (string). The `htmlTag` specifies the HTML element to use (e.g., 'a', 'button').
 * @returns A React component representing an unordered list of navigation items.
 *
 * @example
 * ```typescriptreact
 * import { navItems } from './navItems';
 *
 * const myNavItems = [
 *    { htmlTag: 'a', name: 'Home', href: '/#home', dataContent: 'home', className: 'nav-item1' },
 *    { htmlTag: 'a', name: 'Sobre mim', href: '/#about', dataContent: 'about', className: 'nav-item2' },
 *    { htmlTag: 'a', name: 'Projetos', href: '/#projects', dataContent: 'projects', className: 'nav-item3' },
 *    { htmlTag: 'a', name: 'Terminal', href: '/terminal', dataContent: 'terminal', className: 'nav-item4' }
 * ];
 *
 * function App() {
 *   return (
 *     <nav>
 *       {navItems(...myNavItems)}
 *     </nav>
 *   );
 * }
 * ```
 */
export function navItems(...items: NavItem[]): JSX.Element {
    return (
        <ul className="nav-ul">
            {items.map((item, index) => {
                const HtmlTag = item.htmlTag; // Dynamic tag (e.g., 'a')
                const { htmlTag, name, ...rest } = item; // Remove `htmlTag` from rest properties

                return (
                    <li className="nav-li" key={index}>
                        {React.createElement(
                            HtmlTag,
                            { ...rest }, // Spread only valid attributes
                            name // Render content inside the element
                        )}
                    </li>
                );
            })}
        </ul>
    );
}

export default navItems;
