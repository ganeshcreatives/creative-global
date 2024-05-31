import React, { useEffect, useRef, useState } from "react";
// import "node_modules/video-react/dist/video-react.css";
import "video-react/dist/video-react.css";
import {
  Player,
  BigPlayButton,
  ControlBar,
  FullscreenToggle,
} from "video-react";

function VideoCard({ videoData = {} }) {
  const playerRef = useRef(null);
  const [isVideoPlayed, setIsVideoPlayed] = useState(false);
  const videInfo = videoData?.attributes;

  // const handleOnPlay = () => {
  //   setIsVideoPlayed(true);
  //   if (playerRef?.current) {
  //     playerRef?.current?.toggleFullscreen();
  //   }
  // };
  return (
    <div>
      <div className="h-[150px] sm:h-[180px] md:h-[200px] lg:h-[15rem] w-full relative rounded-lg border border-[#C0C0C0] overflow-hidden">
        <Player
          ref={playerRef}
          // onPlay={handleOnPlay}
          height="100%"
          fluid={false}
          playsInline={true}
          poster={videInfo?.thumbnail_url?.data?.attributes?.url}
          src={videInfo?.video_url + "#t=0.001"}
          muted
          preload="metadata"
        >
          <BigPlayButton position="center" />
          <ControlBar autoHide={false}>
            <FullscreenToggle />
          </ControlBar>
        </Player>
      </div>
      <div className="pt-8 max-md:px-4 w-full">
        <p className="text-sm md:text-base border border-yellow-900 font-medium tracking-tight leading-[140%] text-black-33 py-2 px-4 lg:px-8 bg-yellow-100 rounded-full inline-block mb-7">
          {videInfo?.video_category?.data?.attributes?.category_title ?? "All"}
        </p>

        <p className="text-base leading-5 text-black-33 font-normaldisabled line-clamp-3 h-[62px]">
          {videInfo?.title}
        </p>
      </div>
    </div>
  );
}

export default VideoCard;
