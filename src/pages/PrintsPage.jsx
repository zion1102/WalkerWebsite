import GalleryGrid from '../components/GalleryGrid';

const printNotes = [
  'Museum-grade paper options',
  'Matte and semi-gloss finish choices',
  'Limited-run drops throughout the year',
];

export default function PrintsPage({ images }) {
  const printImages = images.filter((img) => img.category === 'prints');

  return (
    <>
      <section className="hero hero-small nature-hero">
        <p className="kicker">Print collection</p>
        <h1>Bring the landscape home</h1>
        <p>
          Curated portrait and nature-driven moments designed to command attention in your
          space.
        </p>
      </section>

      <section className="panel split-panel">
        <div>
          <h2>Print details</h2>
          <p>
            Each piece is color-managed and tested for tonal depth so earth-tone palettes
            stay rich from screen to paper.
          </p>
        </div>
        <ul className="check-list">
          {printNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </section>

      <GalleryGrid
        images={printImages}
        title="Available Prints"
        description="Download icon appears only on images currently enabled for downloadable delivery."
        allowDownload
      />
    </>
  );
}
