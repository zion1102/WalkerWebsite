import './Base.css';
import './PrintsPage.css';

const FEAT = {
  title: 'The Quiet Season', edition: 'Edition of 25 · 8 remaining',
  price: 195, sizes: '16×24  ·  24×36',
  desc: 'Afternoon light through old-growth canopy. 35mm, archival luster.',
  src: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1200&q=85',
};

const COLS = [
  { name: 'Forest & Light', desc: 'Canopy, moss, dappled light.',
    prints: [
      { id:1, title:'First Light',  price:110, sizes:'8×10  12×18  24×36', src:'https://images.unsplash.com/photo-1448375240586-882707db888b?w=700&q=80' },
      { id:2, title:'Canopy',       price:120, sizes:'8×10  12×18',        src:'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=700&q=80' },
      { id:3, title:'Moss & Bark',  price:95,  sizes:'8×10  12×18  24×36', src:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=700&q=80' },
    ]},
  { name: 'Coastline', desc: 'Salt air, soft horizons, the still hour.',
    prints: [
      { id:4, title:'Tide Line',    price:140, sizes:'8×10  12×18  24×36', src:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&q=80' },
      { id:5, title:'Low Shore',    price:130, sizes:'8×10  12×18',        src:'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=700&q=80' },
      { id:6, title:'Sea Glass',    price:115, sizes:'8×10  12×18  24×36', src:'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=700&q=80' },
    ]},
  { name: 'Portraits', desc: 'Still, story-led. Natural light only.',
    prints: [
      { id:7, title:'Golden Hour',  price:120, sizes:'8×10  12×18  24×36', src:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80' },
      { id:8, title:'Soft Gaze',    price:120, sizes:'8×10  12×18',        src:'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=700&q=80' },
      { id:9, title:'Warm Still',   price:110, sizes:'8×10  12×18  24×36', src:'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=80' },
    ]},
  { name: 'Open Sky', desc: 'Wide fields, vast quiet, undisturbed.',
    prints: [
      { id:10, title:'Field at Dusk', price:130, sizes:'8×10  12×18  24×36', src:'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=700&q=80' },
      { id:11, title:'Blue Hour',     price:140, sizes:'12×18  24×36',       src:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80' },
      { id:12, title:'Morning Mist',  price:125, sizes:'8×10  12×18  24×36', src:'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=700&q=80' },
    ]},
];

export default function PrintsPage() {
  return (
    <div className="wp-page prints">

      <section className="hero">
        <div className="hero-bg"><img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=1800&q=85" alt="" /></div>
        <div className="hero-content">
          <span className="kicker">Print store</span>
          <h1>Bring the<br />outdoors in.</h1>
        </div>
      </section>

      <div className="info-strip">
        <div className="strip-panel"><span className="strip-num">Details</span>
          <ul className="detail-list">
            <li>Premium matte and luster</li><li>8×10, 12×18, 24×36</li><li>Archival inks</li>
          </ul>
        </div>
        <div className="strip-panel"><span className="strip-num">Drops</span>
          <p>Small seasonal runs — intentional and collectible.</p>
        </div>
        <div className="strip-panel"><span className="strip-num">Shipping</span>
          <p>Flat-packed, insured, 7–10 days worldwide.</p>
        </div>
      </div>

      <div className="feat">
        <div className="feat-img"><img src={FEAT.src} alt={FEAT.title} /></div>
        <div className="feat-copy">
          <p className="feat-ed">{FEAT.edition}</p>
          <h2 className="feat-title">{FEAT.title}</h2>
          <p className="feat-desc">{FEAT.desc}</p>
          <div className="feat-meta">
            <span className="feat-sizes">{FEAT.sizes}</span>
            <span className="feat-price">${FEAT.price}</span>
          </div>
          <button className="btn-inq">Inquire</button>
        </div>
      </div>

      {COLS.map(col => (
        <div key={col.name}>
          <div className="col-head">
            <div><h2 className="col-name">{col.name}</h2><p className="col-desc">{col.desc}</p></div>
            <span className="col-ct">{col.prints.length} prints</span>
          </div>
          <div className="pgrid">
            {col.prints.map(p => (
              <div className="pcard" key={p.id}>
                <div className="pcard-img">
                  <img src={p.src} alt={p.title} />
                  <div className="pcard-hov"><span>View</span></div>
                </div>
                <div className="pcard-info">
                  <div><p className="pcard-title">{p.title}</p><p className="pcard-sizes">{p.sizes}</p></div>
                  <p className="pcard-price">${p.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      <div className="pcta">
        <span className="kicker">Custom orders</span>
        <h3>Something specific in mind?</h3>
        <p>Reach out about custom sizes, framing, or prints from your session.</p>
      </div>

    </div>
  );
}