import GalleryGrid from '../components/GalleryGrid';

const values = [
  {
    title: 'Grounded color stories',
    copy: 'Warm shadows, muted greens, stone neutrals, and natural skin tones stay central in every edit.',
  },
  {
    title: 'Direction without stiffness',
    copy: 'Sessions flow naturally with subtle prompts so photos feel alive and honest instead of over-posed.',
  },
  {
    title: 'Print-ready artistry',
    copy: 'Every frame is composed to hold up in large format with rich contrast and timeless visual weight.',
  },
];

export default function LandingPage({ featuredImages }) {
  return (
    <>
      <section className="hero nature-hero">
        <p className="kicker">Earth tones • Modern editorial • Prints in your face</p>
        <h1>Nature-rooted portraits that feel cinematic and deeply human.</h1>
        <p>
          Walker blends environmental texture with intentional composition to create imagery
          that feels both intimate and bold.
        </p>
      </section>

      <section className="panel split-panel">
        <div>
          <h2>Built for stories with soul</h2>
          <p>
            From intimate portraits to loud editorial moments, each gallery is crafted to
            feel organic, emotional, and strong on walls, in books, and online.
          </p>
        </div>
        <ul className="feature-list">
          {values.map((item) => (
            <li key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </li>
          ))}
        </ul>
      </section>

      <GalleryGrid
        images={featuredImages}
        title="Featured Work"
        description="A rotating edit of portraits and storytelling frames curated from recent sessions."
      />
    </>
  );
}
