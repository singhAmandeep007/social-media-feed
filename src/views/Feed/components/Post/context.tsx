import { TPost } from "@/types/Post";
import { createContext, useContext } from "react";

type TPostProviderProps = TPost & {
  children: React.ReactNode;
};

type TPostProviderState = TPost;

export const PostContext = createContext<TPostProviderState | null>(null);

export const PostProvider = ({ children, ...props }: TPostProviderProps) => {
  return <PostContext.Provider value={props}>{children}</PostContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const usePostContext = () => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error("usePostContext must be used within a PostProvider");
  }
  return context;
};
