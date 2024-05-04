import { FC, PropsWithChildren } from "react";

import "./Header.css";
import { usePostContext } from "../../context";

import "./Header.css";
import { Timestamp } from "./Timestamp";

import ImageError from "@/assets/image-error.png";

export type THeaderProps = Record<string, never>;

export const Header: FC<PropsWithChildren<THeaderProps>> = () => {
  const { owner, ownerProfileUrl, timestamp } = usePostContext();

  return (
    <div className="post-header">
      <img
        src={ownerProfileUrl}
        className="post-header-profile-img"
        alt={owner}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = ImageError;
        }}
      />
      <h4>{owner}</h4>
      <Timestamp oldDate={timestamp} />
    </div>
  );
};
