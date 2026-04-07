import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import PrintsPage from './pages/PrintsPage';
import BookingsPage from './pages/BookingsPage';
import AdminPage from './pages/AdminPage';
import { useGalleryStore } from './hooks';
import './styles.css';

function Nav() {
  return (
    <nav className="wp-nav">
      <NavLink to="/" className="wp-nav-logo">Walker</NavLink>
      <ul className="wp-nav-links">
        <li><NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Journal</NavLink></li>
        <li><NavLink to="/prints" className={({ isActive }) => isActive ? 'active' : ''}>Prints</NavLink></li>
        <li><NavLink to="/bookings" className={({ isActive }) => isActive ? 'active' : ''}>Book</NavLink></li>
        <li><NavLink to="/admin" className={({ isActive }) => isActive ? 'active' : ''}>Admin</NavLink></li>
      </ul>
    </nav>
  );
}

export default function App() {
  const { images, featuredImages, upsertImage, removeImage, setDownloadable } =
    useGalleryStore();

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage featuredImages={featuredImages} />} />
        <Route path="/prints" element={<PrintsPage images={images} />} />
        <Route path="/bookings" element={<BookingsPage />} />
        <Route
          path="/admin"
          element={
            <AdminPage
              images={images}
              upsertImage={upsertImage}
              removeImage={removeImage}
              setDownloadable={setDownloadable}
            />
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}