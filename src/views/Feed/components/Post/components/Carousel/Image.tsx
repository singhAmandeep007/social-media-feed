import { FC, PropsWithChildren, useEffect, useState } from "react";

import ErrorImg from "@/assets/image-error.png";
import PlaceholderImg from "@/assets/image-placeholder.png";

import "./Image.css";

export type TImageProps = {
  src: string;
  onDoubleClick: () => void;
};

export const Image: FC<PropsWithChildren<TImageProps>> = ({ src, onDoubleClick }) => {
  const [imgLoaded, setImgLoaded] = useState<boolean>(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [src]);

  return (
    <img
      src={!imgLoaded ? PlaceholderImg : src}
      className={"post-carousel-img fallback"}
      alt="media"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.src = ErrorImg;
      }}
      onLoad={(e) => {
        const target = e.target as HTMLImageElement;
        if (target.getAttribute("src") === src) {
          target.classList.remove("fallback");
        }
        if (target.getAttribute("src") === PlaceholderImg) {
          target.classList.add("fallback");
        }
        setImgLoaded(true);
      }}
      onDoubleClick={(e) => {
        e.preventDefault();
        onDoubleClick();
      }}
      loading="lazy"
    />
  );
};
