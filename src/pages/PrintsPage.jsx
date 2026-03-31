import GalleryGrid from '../components/GalleryGrid';

export default function PrintsPage({ images }) {
  const printImages = images.filter((img) => img.category === 'prints');

  return (
    <>
      <section className="hero hero-small">
        <p className="kicker">Print store</p>
        <h1>Own the moment</h1>
        <p>Choose a print and hang a story that speaks loudly.</p>
      </section>
      <GalleryGrid images={printImages} title="Available Prints" allowDownload />
    </>
  );
}
