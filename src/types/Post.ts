export const POST_MEDIA_TYPE = {
  VIDEO: "video",
  IMAGE: "image",
} as const;

export type TPostMedia = {
  type: (typeof POST_MEDIA_TYPE)[keyof typeof POST_MEDIA_TYPE];
  data: string;
};

export type TPost = {
  owner: string;
  ownerProfileUrl: string;
  likes: number;
  timestamp: number;
  title: string;
  commentsCount: number;
  id: number;
  media: TPostMedia[];
};

export type TPosts = TPost[];
