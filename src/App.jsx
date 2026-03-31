import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './pages/LandingPage';
import PrintsPage from './pages/PrintsPage';
import BookingsPage from './pages/BookingsPage';
import AdminPage from './pages/AdminPage';
import { useGalleryStore } from './hooks';

export default function App() {
  const { images, featuredImages, upsertImage, removeImage, setDownloadable } =
    useGalleryStore();

  return (
    <Layout>
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
    </Layout>
  );
}
