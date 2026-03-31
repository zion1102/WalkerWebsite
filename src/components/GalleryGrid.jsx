export default function GalleryGrid({ images, title, allowDownload = false }) {
  return (
    <section>
      <h2 className="section-title">{title}</h2>
      <div className="grid">
        {images.map((img) => (
          <article key={img.id} className="card">
            <img src={img.imageUrl} alt={img.alt || img.title} className="photo" />
            <div className="card-content">
              <h3>{img.title}</h3>
              <p className="tag">{img.category.toUpperCase()}</p>
              {allowDownload && img.downloadable ? (
                <a href={img.imageUrl} download className="download-link">
                  Download
                </a>
              ) : (
                <p className="muted">Download disabled</p>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
