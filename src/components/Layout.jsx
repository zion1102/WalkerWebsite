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
        <div>
          <Link to="/" className="brand">
            Walker Photography
          </Link>
          <p className="muted">Natural-light portraits and print stories</p>
        </div>
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
      <footer className="content-section">
        <p className="muted">
          Crafted with a love for natural textures, quiet landscapes, and authentic moments.
        </p>
      </footer>
    </div>
  );
}
