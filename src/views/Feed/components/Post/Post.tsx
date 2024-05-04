import { TPost } from "@/types/Post";
import { PropsWithChildren } from "react";

import { PostProvider } from "./context";

import { Header, Carousel, Footer } from "./components";

import "./Post.css";

export type TPostProps = TPost;

export function Post({ children, ...post }: PropsWithChildren<TPostProps>) {
  return (
    <PostProvider {...post}>
      <div className="post">{children}</div>
    </PostProvider>
  );
}

Post.Header = Header;
Post.Carousel = Carousel;
Post.Footer = Footer;
