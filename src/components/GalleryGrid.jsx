function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false" className="download-icon">
      <path
        d="M12 3v10.2l3.6-3.6 1.4 1.4-6 6-6-6 1.4-1.4 3.6 3.6V3h2Zm-8 14h16v4H4v-4Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function GalleryGrid({ images, title, allowDownload = false, description }) {
  return (
    <section className="gallery-section">
      <div className="section-heading-row">
        <h2 className="section-title">{title}</h2>
        {description ? <p className="section-description">{description}</p> : null}
      </div>

      <div className="grid">
        {images.map((img) => (
          <article key={img.id} className="card">
            <img src={img.imageUrl} alt={img.alt || img.title} className="photo" />
            <div className="card-content">
              <h3>{img.title}</h3>
              <p className="tag">{img.category.toUpperCase()}</p>
              {allowDownload && img.downloadable ? (
                <a href={img.imageUrl} download className="download-link" aria-label={`Download ${img.title}`}>
                  <DownloadIcon />
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
