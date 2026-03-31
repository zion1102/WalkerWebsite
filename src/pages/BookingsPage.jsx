export default function BookingsPage() {
  return (
    <section className="panel">
      <h1>Book a session</h1>
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
  );
}
