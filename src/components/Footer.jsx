function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>GALERIE GOTHIQUE</h3>
          <p>Khám phá vẻ đẹp nghệ thuật Gothic</p>
          <div className="footer-social">
            <a href="#" className="social-link">✦</a>
            <a href="#" className="social-link">⚜</a>
            <a href="#" className="social-link">✦</a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Liên Kết</h4>
          <ul>
            <li><a href="#home">Trang Chủ</a></li>
            <li><a href="#gallery">Triển Lãm</a></li>
            <li><a href="#about">Giới Thiệu</a></li>
            <li><a href="#contact">Liên Hệ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Giờ Mở Cửa</h4>
          <p>Thứ 2 - Thứ 6: 9:00 - 18:00</p>
          <p>Thứ 7 - Chủ Nhật: 10:00 - 20:00</p>
        </div>

        <div className="footer-section">
          <h4>Liên Hệ</h4>
          <p>Email: info@galeriegothique.com</p>
          <p>Điện thoại: +84 123 456 789</p>
        </div>
      </div>

      <div className="footer-divider">
        <div className="divider-ornament">✦</div>
        <div className="divider-line"></div>
        <div className="divider-ornament">⚜</div>
        <div className="divider-line"></div>
        <div className="divider-ornament">✦</div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 Galerie Gothique. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
}
