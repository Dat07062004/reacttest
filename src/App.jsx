const { useState } = React;

function App() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <div className="app">
      <Header />
      <Hero />
      <Gallery onSelectArtwork={setSelectedArtwork} />
      {selectedArtwork && (
        <ArtworkModal 
          artwork={selectedArtwork} 
          onClose={() => setSelectedArtwork(null)} 
        />
      )}
      <Footer />
    </div>
  );
}
