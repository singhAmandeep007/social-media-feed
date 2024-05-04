import { FC, PropsWithChildren, useState } from "react";

import "./Footer.css";
import { usePostContext } from "../../context";

import LikeImg from "@/assets/like.png";

import "./Footer.css";

export type TFooterProps = {
  onLike?: (id: number) => void;
};

export const Footer: FC<PropsWithChildren<TFooterProps>> = ({ onLike }) => {
  const { likes, commentsCount, id } = usePostContext();

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(true);
    onLike?.(id);
  };

  return (
    <div className="post-footer">
      <button
        onClick={handleLike}
        className={`post-footer-like-btn ${isLiked ? "liked" : ""}`}
      >
        Like{" "}
        <img
          src={LikeImg}
          alt="like img"
        />
      </button>
      <p className="post-footer-like-counts"> {new Intl.NumberFormat("en-IN").format(likes)} likes</p>
      <p className="post-footer-comment-counts">{new Intl.NumberFormat("en-IN").format(commentsCount)} comments</p>
    </div>
  );
};
