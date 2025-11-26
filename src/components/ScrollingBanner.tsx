const ScrollingBanner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-25 bg-[#3f3f3f] overflow-hidden py-2">
      <div className="scroll-container">
        <div className="scrolling-content">
          <span className="inline-block text-orange-500 font-medium px-4">
            ♦ CONSTRUCTION & INTERIORS: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦ 
            LAND CONSULTANCY: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦
            || ♦ CONSTRUCTION & INTERIORS: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦ 
            LAND CONSULTANCY: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦
            || ♦ CONSTRUCTION & INTERIORS: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦ 
            LAND CONSULTANCY: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦
          </span>
          {/* Repeat the same content again to make the scroll seamless */}
          <span className="inline-block text-orange-500 font-medium px-4">
            ♦ CONSTRUCTION & INTERIORS: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦ 
            LAND CONSULTANCY: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦
            || ♦ CONSTRUCTION & INTERIORS: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦ 
            LAND CONSULTANCY: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦
            || ♦ CONSTRUCTION & INTERIORS: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦ 
            LAND CONSULTANCY: Andhra Pradesh | Telangana | Karnataka | Tamil Nadu | Odisha ♦
          </span>
        </div>
      </div>

      <style>{`
        .scroll-container {
          display: flex;
          width: 200%; /* Double width for seamless scrolling */
        }

        .scrolling-content {
          display: inline-flex;
          white-space: nowrap;
          animation: scroll 15s linear infinite;
        }

        .scrolling-content:hover {
          animation-play-state: paused;
        }

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;
