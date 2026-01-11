const { useState } = React;

const artworks = [
  {
    id: 1,
    title: 'Nhà Thờ Đêm Trăng',
    artist: 'Viktor Blackwood',
    year: '1889',
    description: 'Một tác phẩm miêu tả vẻ đẹp u ám của nhà thờ Gothic dưới ánh trăng bạc.',
    category: 'Kiến Trúc'
  },
  {
    id: 2,
    title: 'Nữ Hoàng Bóng Tối',
    artist: 'Morgana Shadowmere',
    year: '1901',
    description: 'Chân dung của một nữ hoàng Gothic với vẻ đẹp huyền bí và quyền lực tối thượng.',
    category: 'Chân Dung'
  },
  {
    id: 3,
    title: 'Vườn Hoa Đêm',
    artist: 'Lucian Thornfield',
    year: '1895',
    description: 'Khu vườn bí ẩn nở rộ dưới bóng đêm, nơi những bông hoa tối giữa ánh trăng.',
    category: 'Phong Cảnh'
  },
  {
    id: 4,
    title: 'Cổng Địa Ngục',
    artist: 'Damien Ravencroft',
    year: '1887',
    description: 'Cổng dẫn vào thế giới bên kia, được trang trí bằng những hoa văn Gothic phức tạp.',
    category: 'Kiến Trúc'
  },
  {
    id: 5,
    title: 'Thiên Thần Sa Ngã',
    artist: 'Seraphina Nightshade',
    year: '1902',
    description: 'Một thiên thần rơi từ thiên đường, mang trong mình vẻ đẹp bi thương và quyến rũ.',
    category: 'Tượng Điêu Khắc'
  },
  {
    id: 6,
    title: 'Lâu Đài Abandoned',
    artist: 'Cornelius Darkmore',
    year: '1893',
    description: 'Lâu đài bị bỏ hoang với những tháp cao vút, ẩn chứa bí mật của quá khứ.',
    category: 'Kiến Trúc'
  },
  {
    id: 7,
    title: 'Bữa Tiệc Đêm',
    artist: 'Isabella Crimson',
    year: '1898',
    description: 'Một bữa tiệc tối bí ẩn với những vị khách trong bóng tối.',
    category: 'Sự Kiện'
  },
  {
    id: 8,
    title: 'Rừng Sương Mù',
    artist: 'Alaric Mistwood',
    year: '1891',
    description: 'Khu rừng đầy sương mù với những cây cổ thụ và ánh sáng lờ mờ.',
    category: 'Phong Cảnh'
  }
]

function Gallery({ onSelectArtwork }) {
  const [filter, setFilter] = useState('Tất Cả')

  const categories = ['Tất Cả', ...new Set(artworks.map(art => art.category))]

  const filteredArtworks = filter === 'Tất Cả' 
    ? artworks 
    : artworks.filter(art => art.category === filter)

  return (
    <section className="gallery" id="gallery">
      <div className="gallery-header">
        <h2 className="gallery-title">Bộ Sưu Tập Nghệ Thuật</h2>
        <div className="title-ornament">
          <span>✦</span>
          <div className="ornament-line"></div>
          <span>⚜</span>
          <div className="ornament-line"></div>
          <span>✦</span>
        </div>
      </div>

      <div className="gallery-filters">
        {categories.map(category => (
          <button
            key={category}
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {filteredArtworks.map(artwork => (
          <div 
            key={artwork.id} 
            className="artwork-card"
            onClick={() => onSelectArtwork(artwork)}
          >
            <div className="card-frame">
              <div className="card-image">
                <div className="image-placeholder">
                  <span className="placeholder-icon">🖼️</span>
                </div>
              </div>
              <div className="card-content">
                <h3 className="artwork-title">{artwork.title}</h3>
                <p className="artwork-artist">{artwork.artist}</p>
                <div className="artwork-meta">
                  <span className="artwork-year">{artwork.year}</span>
                  <span className="artwork-category">{artwork.category}</span>
                </div>
              </div>
              <div className="card-corners">
                <span className="corner top-left"></span>
                <span className="corner top-right"></span>
                <span className="corner bottom-left"></span>
                <span className="corner bottom-right"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
