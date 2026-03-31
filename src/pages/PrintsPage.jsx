import GalleryGrid from '../components/GalleryGrid';

export default function PrintsPage({ images }) {
  const printImages = images.filter((img) => img.category === 'prints');

  return (
    <>
      <section className="hero hero-small">
        <p className="kicker">Print store</p>
        <h1>Bring the outdoors into your space</h1>
        <p>
          Curated portrait and lifestyle prints inspired by natural light, earthy palettes,
          and timeless textures.
        </p>
      </section>
      <section className="content-section split-content">
        <article className="panel">
          <h2>Print details</h2>
          <ul className="detail-list">
            <li>Premium matte and luster options.</li>
            <li>Best-selling sizes: 8x10, 12x18, and 24x36.</li>
            <li>Color-balanced for warm, organic interiors.</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Limited drops</h2>
          <p className="muted">
            Seasonal collections are released in small runs to keep each piece feeling
            intentional and collectible.
          </p>
        </article>
      </section>
      <GalleryGrid images={printImages} title="Available Prints" allowDownload />
    </>
  );
}
