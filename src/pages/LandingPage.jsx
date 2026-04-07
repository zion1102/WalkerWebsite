import './Base.css';
import './LandingPage.css';

const IMGS = [
  { src: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1000&q=82', name: 'Golden Hour',   tag: 'Portrait'  },
  { src: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&q=82', name: 'Open Field',   tag: 'Landscape' },
  { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=1000&q=82', name: 'Forest Floor', tag: 'Editorial' },
  { src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=1000&q=82', name: 'Soft Light',   tag: 'Portrait'  },
  { src: 'https://images.unsplash.com/photo-1516575334481-f85287c2c82d?w=1200&q=82', name: 'Morning Mist', tag: 'Couples'   },
  { src: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1000&q=82', name: 'Blue Hour',    tag: 'Landscape' },
  { src: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1000&q=82', name: 'Coastline',   tag: 'Lifestyle' },
  { src: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=1000&q=82', name: 'Forest Walk', tag: 'Editorial' },
];

export default function LandingPage({ featuredImages }) {
  const imgs = (Array.isArray(featuredImages) && featuredImages.length > 0) ? featuredImages : IMGS;
  const g = (i) => imgs[i] || IMGS[i % IMGS.length];

  return (
    <div className="wp-page landing">

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-bg"><img src="https://images.unsplash.com/photo-1473773508845-188df298d2d1?w=1800&q=85" alt="" /></div>
        <div className="hero-content">
          <span className="kicker">Walker Photography</span>
          <h1>Wild<br /><em>light.</em><br />True<br />stories.</h1>
        </div>
      </section>

      {/* ── OPENING ── */}
      <div className="opening">
        <span className="opening-eyebrow">Trinidad · Natural light</span>
        <p className="opening-headline">
          Nature-rooted portraits that feel <em>alive.</em>
        </p>
      </div>

      {/* ── FIRST IMAGE BREAK ── */}
      <div className="break break-h1">
        <img src={g(1).src} alt={g(1).name} />
        <span className="break-caption">{g(1).tag}</span>
      </div>

      {/* ── SCATTER GALLERY ── */}
      <div className="scatter">
        <div className="sc sc-tall">
          <img src={g(0).src} alt="" />
          <div className="sc-lbl"><span className="sc-tag">{g(0).tag}</span><span className="sc-name">{g(0).name}</span></div>
        </div>
        <div className="sc sc-med">
          <img src={g(2).src} alt="" />
          <div className="sc-lbl"><span className="sc-tag">{g(2).tag}</span><span className="sc-name">{g(2).name}</span></div>
        </div>
        <div className="sc sc-med">
          <img src={g(3).src} alt="" />
          <div className="sc-lbl"><span className="sc-tag">{g(3).tag}</span><span className="sc-name">{g(3).name}</span></div>
        </div>
        <div className="sc sc-tall">
          <img src={g(4).src} alt="" />
          <div className="sc-lbl"><span className="sc-tag">{g(4).tag}</span><span className="sc-name">{g(4).name}</span></div>
        </div>
        <div className="sc sc-tall">
          <img src={g(5).src} alt="" />
          <div className="sc-lbl"><span className="sc-tag">{g(5).tag}</span><span className="sc-name">{g(5).name}</span></div>
        </div>
        <div className="sc sc-wide">
          <img src={g(6).src} alt="" />
          <div className="sc-lbl"><span className="sc-tag">{g(6).tag}</span><span className="sc-name">{g(6).name}</span></div>
        </div>
        <div className="sc sc-short">
          <img src={g(7).src} alt="" />
          <div className="sc-lbl"><span className="sc-tag">{g(7).tag}</span><span className="sc-name">{g(7).name}</span></div>
        </div>
        <div className="sc sc-short">
          <img src={g(2).src} alt="" />
          <div className="sc-lbl"><span className="sc-tag">{g(2).tag}</span><span className="sc-name">{g(2).name}</span></div>
        </div>
      </div>

      {/* ── GHOST INTERLUDE ── */}
      <div className="ghost">
        <div className="ghost-num">7</div>
        <div className="ghost-text">
          <h3>Days to delivery.</h3>
          <p>Every session becomes a private gallery of edited, high-resolution images — ready to print or share within a week.</p>
        </div>
      </div>

      {/* ── SECOND FULL-BLEED ── */}
      <div className="break break-h2">
        <img src="https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1800&q=85" alt="" />
        <span className="break-caption">Seasonal · Forest</span>
      </div>

      {/* ── SERVICES ── */}
      <div className="services">
        {[
          { n: '01', h: 'How we shoot',   p: 'Natural movement, soft direction, seasonal light.' },
          { n: '02', h: 'Locations',      p: 'Trails, canyons, beaches — chosen for your story.' },
          { n: '03', h: 'Seasons',        p: 'Any light. Any season. Any mood.' },
          { n: '04', h: 'Delivered',      p: 'Print-ready files and social crops, within 7 days.' },
        ].map(s => (
          <div className="svc" key={s.n}>
            <div className="svc-n">{s.n}</div>
            <h4>{s.h}</h4>
            <p>{s.p}</p>
          </div>
        ))}
      </div>

    </div>
  );
}