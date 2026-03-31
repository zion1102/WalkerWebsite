import GalleryGrid from '../components/GalleryGrid';
import './LandingPage.css';

export default function LandingPage({ featuredImages }) {
  return (
    <div className="landing-page">
      <section className="hero">
        <p className="kicker">Earth tones • Wild light • Story-led portraits</p>
        <h1>Nature-rooted visuals that feel grounded, cinematic, and alive.</h1>
        <p>
          Walker creates portrait and lifestyle imagery inspired by forests, coastlines,
          open skies, and organic textures. Every frame is designed to feel personal, warm,
          and connected to the outdoors.
        </p>
      </section>
      <section className="content-section feature-strip">
        <article className="panel">
          <h3>How we shoot</h3>
          <p className="muted">
            We build sessions around natural movement, soft direction, and seasonal light
            so your gallery feels effortless and true to you.
          </p>
        </article>
        <article className="panel">
          <h3>Locations with character</h3>
          <p className="muted">
            Pine trails, dry canyons, quiet beaches, and green city pockets—chosen to match
            your story and styling.
          </p>
        </article>
        <article className="panel">
          <h3>Delivered for sharing</h3>
          <p className="muted">
            High-resolution edits, social crops, and print-ready options so your favorite
            moments can live online and on your walls.
          </p>
        </article>
      </section>
      <GalleryGrid images={featuredImages} title="Featured Work" />
      <section className="content-section split-content">
        <article className="panel">
          <h2>Seasonal sessions</h2>
          <p>
            Spring blooms, summer haze, autumn texture, winter calm—book in your favorite
            season for a gallery that reflects your mood and style.
          </p>
          <ul className="detail-list">
            <li>Golden hour guidance and outfit planning.</li>
            <li>Location scouting included with every session.</li>
            <li>Moodboard support to shape your visual direction.</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Client favorites</h2>
          <p>
            Most requested sessions include couples, creative portraits, and personal brand
            storytelling in outdoor settings.
          </p>
          <ul className="detail-list">
            <li>45- to 90-minute sessions.</li>
            <li>Optional film-inspired color grading.</li>
            <li>Private gallery delivery within 7 days.</li>
          </ul>
        </article>
      </section>
    </div>
  );
}
