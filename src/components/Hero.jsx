function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-ornament left"></div>
        <div className="hero-ornament right"></div>
        <h2 className="hero-subtitle">Chào Mừng Đến Với</h2>
        <h1 className="hero-title">TRIỂN LÃM NGHỆ THUẬT GOTHIC</h1>
        <div className="hero-divider">
          <span>⚜</span>
          <div className="divider-line"></div>
          <span>⚜</span>
        </div>
        <p className="hero-description">
          Khám phá vẻ đẹp huyền bí và nghệ thuật tối thượng từ kỷ nguyên Gothic.
          Nơi ánh sáng và bóng tối giao thoa, tạo nên những kiệt tác vượt thời gian.
        </p>
        <button className="hero-cta">
          Khám Phá Bộ Sưu Tập
          <span className="cta-arrow">→</span>
        </button>
      </div>
      <div className="hero-decoration">
        <div className="decoration-item">✦</div>
        <div className="decoration-item">✦</div>
        <div className="decoration-item">✦</div>
      </div>
    </section>
  );
}
