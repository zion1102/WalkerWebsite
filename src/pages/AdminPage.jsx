import { useState } from 'react';

const emptyDraft = {
  id: '',
  title: '',
  category: 'landing',
  imageUrl: '',
  alt: '',
  downloadable: false,
  featured: false,
};

export default function AdminPage({ images, upsertImage, removeImage, setDownloadable }) {
  const [draft, setDraft] = useState(emptyDraft);

  function handleSubmit(event) {
    event.preventDefault();

    const next = {
      ...draft,
      id: draft.id || crypto.randomUUID(),
    };

    upsertImage(next);
    setDraft(emptyDraft);
  }

  function editImage(image) {
    setDraft(image);
  }

  return (
    <section className="panel">
      <h1>Admin Portal</h1>
      <p>
        Manage which images appear across landing and prints pages. Downloads are off by
        default and can be enabled per image.
      </p>

      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Title
          <input
            value={draft.title}
            onChange={(e) => setDraft((prev) => ({ ...prev, title: e.target.value }))}
            required
          />
        </label>

        <label>
          Category
          <select
            value={draft.category}
            onChange={(e) => setDraft((prev) => ({ ...prev, category: e.target.value }))}
          >
            <option value="landing">Landing</option>
            <option value="prints">Prints</option>
          </select>
        </label>

        <label>
          Image URL
          <input
            type="url"
            value={draft.imageUrl}
            onChange={(e) => setDraft((prev) => ({ ...prev, imageUrl: e.target.value }))}
            required
          />
        </label>

        <label>
          Alt text
          <input
            value={draft.alt}
            onChange={(e) => setDraft((prev) => ({ ...prev, alt: e.target.value }))}
          />
        </label>

        <label className="inline-toggle">
          <input
            type="checkbox"
            checked={draft.featured}
            onChange={(e) => setDraft((prev) => ({ ...prev, featured: e.target.checked }))}
          />
          Feature on landing
        </label>

        <label className="inline-toggle">
          <input
            type="checkbox"
            checked={draft.downloadable}
            onChange={(e) => setDraft((prev) => ({ ...prev, downloadable: e.target.checked }))}
          />
          Allow download
        </label>

        <button type="submit">{draft.id ? 'Update image' : 'Add image'}</button>
      </form>

      <h2 className="section-title">Current images</h2>
      <div className="admin-table">
        {images.map((img) => (
          <div key={img.id} className="admin-row">
            <div>
              <strong>{img.title}</strong>
              <p className="muted">
                {img.category} • {img.downloadable ? 'download on' : 'download off'}
              </p>
            </div>
            <div className="admin-actions">
              <button type="button" onClick={() => editImage(img)}>
                Edit
              </button>
              <button
                type="button"
                onClick={() => setDownloadable(img.id, !img.downloadable)}
              >
                Toggle Download
              </button>
              <button type="button" onClick={() => removeImage(img.id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
