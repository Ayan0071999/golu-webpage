import React from 'react';

const SpotifyEmbed = () => {
  return (
    <div className="w-full flex justify-center">
      <iframe
        style={{ borderRadius: '12px' }}
        src="https://open.spotify.com/embed/playlist/7sngBV0gKsRLhccYw0gZd2?utm_source=generator"
        width="40%"
        height="152"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    </div>
  );
};

export default SpotifyEmbed;
