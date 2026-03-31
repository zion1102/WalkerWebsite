import './BookingsPage.css';

export default function BookingsPage() {
  return (
    <div className="bookings-page">
      <section className="hero hero-small">
        <p className="kicker">Bookings</p>
        <h1>Plan your nature-inspired session</h1>
        <p>
          Tell us your vibe, preferred location, and dates. We will craft a relaxed and
          story-driven shoot around your vision.
        </p>
      </section>
      <section className="content-section split-content">
        <article className="panel">
          <h2>What to expect</h2>
          <ul className="detail-list">
            <li>Pre-session style and location planning call.</li>
            <li>Guided prompts so you never feel awkward on camera.</li>
            <li>Private online gallery with edited high-resolution images.</li>
          </ul>
        </article>
        <article className="panel">
          <h2>Popular sessions</h2>
          <p className="muted">
            Couples in open fields, sunrise portraits on the coast, and storytelling shoots
            for creative brands are requested most often.
          </p>
        </article>
      </section>
      <section className="panel">
        <h2>Book a session</h2>
        <p>Use this form to request portraits, couples, events, or editorial shoots.</p>
        <form className="booking-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Name
            <input placeholder="Your name" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@email.com" required />
          </label>
          <label>
            Session Type
            <select defaultValue="portrait">
              <option value="portrait">Portrait</option>
              <option value="couples">Couples</option>
              <option value="event">Event</option>
              <option value="editorial">Editorial</option>
            </select>
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell me about your vision..." />
          </label>
          <button type="submit">Send request</button>
        </form>
      </section>
    </div>
  );
}
