// NavItem type
type NavItem = { name: string; href: string; dataContent: string; };

// Create & exports component
/**
 * Creates a navigation menu with the provided items.
 *
 * @param items - An array of objects representing the navigation items. Each object should have a `name` (string) and `href` (string) property.
 * @returns A React component representing an unordered list of navigation items.
 *
 * @example
 * ```typescriptreact
 * import { navItems } from './navItems';
 *
 * const myNavItems = [
 *   { name: 'Home', href: '/' },
 *   { name: 'About', href: '/about' },
 *   { name: 'Contact', href: '/contact' },
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
export function navItems(...items: NavItem[]) : JSX.Element {
  return (
    <ul className="nav-ul">
      {items.map((item, index) => (
        <li className="nav-li" key={index}>
          <a href={`${item.href}`} className="nav-item" data-content={item.dataContent.toLocaleLowerCase()} >{item.name}</a>
        </li>
      ))}
    </ul>
  );
}
