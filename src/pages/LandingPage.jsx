import GalleryGrid from '../components/GalleryGrid';

export default function LandingPage({ featuredImages }) {
  return (
    <>
      <section className="hero">
        <p className="kicker">Earth tones • Simple • Prints in your face</p>
        <h1>Visual stories that feel raw, warm, and unforgettable.</h1>
        <p>
          Walker is a portrait and lifestyle photographer crafting bold stills with a
          stripped-back feel.
        </p>
      </section>
      <GalleryGrid images={featuredImages} title="Featured Work" />
    </>
  );
}
