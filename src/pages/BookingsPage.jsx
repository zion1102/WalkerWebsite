import './Base.css';
import './BookingsPage.css';

export default function BookingsPage() {
  return (
    <div className="wp-page bookings">

      <section className="hero">
        <div className="hero-bg"><img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1800&q=85" alt="" /></div>
        <div className="hero-content">
          <span className="kicker">Bookings</span>
          <h1>Let's make<br />something<br />together.</h1>
        </div>
      </section>

      <div className="info-strip">
        <div className="strip-panel"><span className="strip-num">Expect</span>
          <ul className="detail-list">
            <li>Location planning call</li>
            <li>Guided prompts on the day</li>
            <li>Private gallery within 7 days</li>
          </ul>
        </div>
        <div className="strip-panel"><span className="strip-num">Sessions</span>
          <p>Couples in open fields, sunrise portraits, creative brand shoots.</p>
        </div>
        <div className="strip-panel"><span className="strip-num">Turnaround</span>
          <p>Gallery in 7 days. Rush available on request.</p>
        </div>
      </div>

      <div className="booking-wrap">
        <div className="bk-info">
          <span className="kicker">Get in touch</span>
          <h2>Tell me about your vision.</h2>
          <p>I'll follow up within 48 hours to discuss dates, locations, and how we make it feel like you.</p>
          <ul className="detail-list">
            <li>Portraits · Couples · Events · Editorial</li>
            <li>45 or 90 minutes</li>
            <li>Location scouting included</li>
          </ul>
        </div>
        <div className="bk-form-wrap">
          <form className="bk-form" onSubmit={e => e.preventDefault()}>
            <div className="form-row">
              <div className="field"><label htmlFor="n">Name</label><input id="n" type="text" placeholder="Your name" required /></div>
              <div className="field"><label htmlFor="e">Email</label><input id="e" type="email" placeholder="you@email.com" required /></div>
            </div>
            <div className="form-row">
              <div className="field">
                <label htmlFor="t">Session</label>
                <select id="t" defaultValue="portrait">
                  <option value="portrait">Portrait</option>
                  <option value="couples">Couples</option>
                  <option value="event">Event</option>
                  <option value="editorial">Editorial</option>
                </select>
              </div>
              <div className="field"><label htmlFor="d">Date</label><input id="d" type="text" placeholder="Season or month" /></div>
            </div>
            <div className="field"><label htmlFor="m">Message</label><textarea id="m" placeholder="Tell me about your vision..." /></div>
            <button type="submit" className="btn-send">Send request</button>
          </form>
        </div>
      </div>

    </div>
  );
}