import React from "react";

function YoutubeVideo({ videoId }) {
  return (
    <div className="video-responsive" key={videoId}>
      <iframe
        width="1080px"
        height="550px"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&rel=0&playlist=${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;
