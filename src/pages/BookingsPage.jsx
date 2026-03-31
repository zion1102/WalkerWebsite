const sessionTypes = [
  {
    title: 'Portrait Session',
    detail: '1.5 hour guided shoot in a natural-light location with wardrobe + mood planning support.',
  },
  {
    title: 'Couples Story',
    detail: 'Emotion-forward coverage designed like a short film still sequence with movement prompts.',
  },
  {
    title: 'Brand / Editorial',
    detail: 'Creative direction for founders, artists, and campaigns needing elevated environmental portraits.',
  },
];

export default function BookingsPage() {
  return (
    <>
      <section className="hero hero-small nature-hero">
        <p className="kicker">Bookings</p>
        <h1>Let&apos;s design your shoot</h1>
        <p>Tell me your vision and I&apos;ll build a tailored concept, location plan, and shot flow.</p>
      </section>

      <section className="panel split-panel">
        <div>
          <h2>Session experiences</h2>
          <p>
            Every booking includes collaborative pre-production so your gallery feels cohesive
            and emotionally accurate.
          </p>
          <div className="session-cards">
            {sessionTypes.map((session) => (
              <article key={session.title} className="mini-card">
                <h3>{session.title}</h3>
                <p>{session.detail}</p>
              </article>
            ))}
          </div>
        </div>

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
            Ideal date
            <input type="date" />
          </label>
          <label>
            Message
            <textarea rows="5" placeholder="Tell me about your vision..." />
          </label>
          <button type="submit">Send request</button>
        </form>
      </section>
    </>
  );
}
