function Header() {
  return (
    <header className="header">
      <div className="header-ornament top-left"></div>
      <div className="header-ornament top-right"></div>
      <nav className="nav">
        <div className="logo">
          <span className="logo-icon">⚜</span>
          <h1>GALERIE GOTHIQUE</h1>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">Trang Chủ</a></li>
          <li><a href="#gallery">Triển Lãm</a></li>
          <li><a href="#about">Giới Thiệu</a></li>
          <li><a href="#contact">Liên Hệ</a></li>
        </ul>
      </nav>
    </header>
  );
}
