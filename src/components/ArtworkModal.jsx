const { useEffect } = React;

function ArtworkModal({ artwork, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        
        <div className="modal-frame">
          <div className="modal-ornament top-left">✦</div>
          <div className="modal-ornament top-right">✦</div>
          <div className="modal-ornament bottom-left">✦</div>
          <div className="modal-ornament bottom-right">✦</div>

          <div className="modal-image">
            <div className="image-placeholder-large">
              <span className="placeholder-icon-large">🖼️</span>
            </div>
          </div>

          <div className="modal-info">
            <h2 className="modal-title">{artwork.title}</h2>
            <div className="modal-divider">
              <span>⚜</span>
            </div>
            <p className="modal-artist">Nghệ Sĩ: <span>{artwork.artist}</span></p>
            <p className="modal-year">Năm: <span>{artwork.year}</span></p>
            <p className="modal-category">Thể Loại: <span>{artwork.category}</span></p>
            <p className="modal-description">{artwork.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
