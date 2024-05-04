import { FC, PropsWithChildren } from "react";

import ChevronImg from "@/assets/chevron.png";

import "./NavigateButton.css";

export type TNavigationButtonProps = {
  onClick: () => void;
  position: "left" | "right";
  className?: string;
};

export const NavigationButton: FC<PropsWithChildren<TNavigationButtonProps>> = ({ onClick, position, className }) => {
  return (
    <button
      onClick={onClick}
      className={`post-carousel-navigation-btn ${className}`}
    >
      <img
        className={`${position === "left" ? "rotate-180" : ""} `}
        src={ChevronImg}
        alt={`navigate ${position}`}
      />
    </button>
  );
};
