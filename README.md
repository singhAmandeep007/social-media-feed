# Instagram like social media feed using React + TS + Vite

## How to run on local ?

```bash
# Clone the repository
git clone
# Change directory
cd repo-name
# Install dependencies
npm install
# Start the development server
npm run dev
```

## Product Mockup

1. [Loading Image](./src/assets/1.png)
2. [Broken Media](./src/assets/2.png)
3. [Like](./src/assets/3.png)
4. [Video](./src/assets/4.png)

## Product Demo

<video controls width="500">
	<source src="./src/assets/social-media-feed.mp4" type="video/mp4">
	Your browser does not support the video tag.
</video>

## Product Description

Instagram like social networking application. The application shows a list of “posts” which the user could interact with. A post contains information around the post owner, timestamp when it was posted, likes and comments count.

## Product Features

- No external js/css libraries are used.
- Timestamp shows the delta measured from current date. e.g. if the timestamp is 3 days ago from today's date then it shows `3d`. If it were 2 months ago then it shows `2m`. If posted today then it shows `today`.
- Post only loads when it is visible in the viewport.
- The post contains multiple media which could be an image or a video.
- Multiple media is represented using a carousel
- The user can navigate the media either by clicking on chevron left and right icons or by clicking a specific carousel bubble.
- Carousel bubbles are present at the bottom, showing which media item is the user currently active at. Clicking on any bubble makes the media associated with that bubble "index" active.
- Images while loading displays the placeholder background
- Images if fail to load displays the error background
- Clicking on the video toggle play/pause
- If the video is paused, it shows the play icon with a
  backdrop.
- The user can like the post by double clicking.
- On liking the post the like count should increase by 1.
- If a post is liked, the action should be captured and stored in browser cache (local storage), so that repeat visits should retain number of likes.

## Tech Stack

1. React
2. TypeScript
3. Vite
4. ESLint

## Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
