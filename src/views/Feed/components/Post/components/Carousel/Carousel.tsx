import { FC, PropsWithChildren, useState } from "react";

import { POST_MEDIA_TYPE } from "@/types/Post";

import "./Carousel.css";
import { usePostContext } from "../../context";

import { NavigationButton } from "./NavigationButton";
import { Image } from "./Image";

import { Video } from "./Video";

export type TCarouselProps = {
  onDoubleTap: (id: number) => void;
};

export const Carousel: FC<PropsWithChildren<TCarouselProps>> = ({ onDoubleTap }) => {
  const { media, id } = usePostContext();

  const [currentIdx, setCurrentIdx] = useState(0);

  const navigateLeft = () => {
    setCurrentIdx((prevIndex) => (prevIndex === 0 ? media.length - 1 : prevIndex - 1));
  };

  const navigateRight = () => {
    setCurrentIdx((prevIndex) => (prevIndex === media.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="post-carousel">
      <div className="post-carousel-navigation">
        <NavigationButton
          onClick={navigateLeft}
          position="left"
          className="navigate-btn-left"
        />
        <NavigationButton
          onClick={navigateRight}
          position="right"
          className="navigate-btn-right"
        />

        <div className="navigate-bubble-wrapper">
          {media.map((_, idx) => (
            <span
              key={idx}
              className={`navigate-bubble ${idx === currentIdx ? "active" : ""}`}
              onClick={() => setCurrentIdx(idx)}
            />
          ))}
        </div>
      </div>

      <div className="post-carousel-media">
        {media[currentIdx]["type"] === POST_MEDIA_TYPE.VIDEO && (
          <Video
            src={media[currentIdx]["data"]}
            onDoubleClick={() => onDoubleTap(id)}
          />
        )}

        {media[currentIdx]["type"] === POST_MEDIA_TYPE.IMAGE && (
          <Image
            src={media[currentIdx]["data"]}
            onDoubleClick={() => onDoubleTap(id)}
          />
        )}
      </div>
    </div>
  );
};
