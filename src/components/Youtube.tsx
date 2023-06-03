import React from "react";

const YouTubeEmbed = () => {
  return (
    <div className="youtube-video-div">
      <iframe
        className="youtube-iframe"
        src={`https://www.youtube.com/embed/Z6HigcanTbo`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
