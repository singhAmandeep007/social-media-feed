import { FC, PropsWithChildren, useEffect, useRef, useState } from "react";

import ErrorImg from "@/assets/image-error.png";
import PlayButton from "@/assets/play-button.png";

import "./Video.css";

export type TVideoProps = {
  src: string;
  onDoubleClick: () => void;
};

export const Video: FC<PropsWithChildren<TVideoProps>> = ({ src, onDoubleClick }) => {
  const [videoError, setVideoError] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const videoPlayPauseBtnRef = useRef<HTMLButtonElement>(null);

  const handleVideoPlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        videoRef.current.style.opacity = "1";
        video.play();
        if (videoPlayPauseBtnRef.current) {
          videoPlayPauseBtnRef.current.hidden = true;
        }
      } else {
        videoRef.current.style.opacity = "0.5";
        video.pause();
        if (videoPlayPauseBtnRef.current) {
          videoPlayPauseBtnRef.current.hidden = false;
        }
      }
    }
  };

  useEffect(() => {
    setVideoError(false);
  }, [src]);

  return (
    <div
      className="post-carousel-video"
      onClick={handleVideoPlayPause}
      onDoubleClick={(e) => {
        e.stopPropagation();
        onDoubleClick();
      }}
    >
      {!videoError && (
        <>
          {" "}
          <video
            src={src}
            controls={false}
            ref={videoRef}
            autoPlay={false}
            onError={() => {
              setVideoError(true);
            }}
            style={{ opacity: "0.5" }}
          ></video>
          <button
            className="play-pause-btn"
            ref={videoPlayPauseBtnRef}
          >
            <img
              src={PlayButton}
              alt="play/pause"
            />
          </button>
        </>
      )}

      {videoError && (
        <img
          src={ErrorImg}
          alt="fallback"
          className="fallback-img"
        />
      )}
    </div>
  );
};
