import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Landing' },
  { to: '/prints', label: 'Prints' },
  { to: '/bookings', label: 'Bookings' },
  { to: '/admin', label: 'Admin Portal' },
];

export default function Layout({ children }) {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link to="/" className="brand">
          Walker Photography
        </Link>
        <nav>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link-active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
