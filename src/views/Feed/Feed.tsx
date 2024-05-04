import { useLocalStorage } from "@/hooks";
import { TPosts } from "@/types/Post";
import { mergeCollectionsByKey, sleep } from "@/utils";

import DATA from "@/DATA.json";

import { FC, PropsWithChildren, useEffect, useRef } from "react";

import { RenderIfVisible } from "@/components";

import "./Feed.css";
import { Post } from "./components";

const getData = async function () {
  await sleep(2000);
  return DATA;
};

export type TFeedProps = Record<string, never>;

export const Feed: FC<PropsWithChildren<TFeedProps>> = () => {
  const [posts, setPosts] = useLocalStorage<TPosts>("posts", []);

  const feedWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    (async function fetchData() {
      const data = (await getData()) as TPosts;

      setPosts(posts.length > 0 ? mergeCollectionsByKey(data, posts, ["likes"]) : data);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOnLike = (id: number) => {
    setPosts(((prevPosts: TPosts) => {
      return prevPosts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.likes + 1,
          };
        }
        return post;
      });
    }) as unknown as TPosts);
  };

  return (
    <div className="feed">
      <div
        className="feed-wrapper"
        ref={feedWrapperRef}
      >
        {posts.map((post) => (
          <RenderIfVisible
            key={post.id}
            root={feedWrapperRef.current}
            visibleOffset={100}
            defaultHeight={550}
            shouldObserverOnce={true}
            className="feed-item"
          >
            <Post {...post}>
              <Post.Header />
              <Post.Carousel onDoubleTap={handleOnLike} />
              <Post.Footer onLike={handleOnLike} />
            </Post>
          </RenderIfVisible>
        ))}
      </div>
    </div>
  );
};
