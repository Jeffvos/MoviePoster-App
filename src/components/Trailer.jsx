import React from "react";
import "./poster.css";
import YoutubeVideo from "./YoutubeVideo";
import trailers from "./data/trailers.json";

function Trailer({ videoId }) {
  const YoutubeVideoId = () => {
    const videoKey = trailers[videoId].map((video) => {
      if (video.name === "Official Trailer") {
        return (
          <div className="trailer" key={videoId}>
            <div className="video">
              <YoutubeVideo videoId={video.key} />
            </div>
          </div>
        );
      } else {
        return <> </>;
      }
    });
    return videoKey;
  };
  return (
    <>
      <YoutubeVideoId />
    </>
  );
}

export default Trailer;
