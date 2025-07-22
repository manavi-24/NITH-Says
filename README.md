# NITH Says

A social media platform for NITH students to share their thoughts, connect with peers, and stay updated with campus news!

## Overview

This project is built using [Next.js](https://nextjs.org/) and bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It leverages Firebase for backend services and utilizes Tailwind CSS for styling. The platform allows users to post content (text, images, or videos), interact via likes and comments, and stay updated with campus-related news.

## Project Structure

- **src/app/**  
  - `layout.js`: Main layout for the app, includes sidebar, news, search, and comment modal.
  - `posts/[id]/page.js`: Dynamic route to render individual post details and associated comments.

- **src/components/**  
  - `Sidebar.jsx`: Renders user profile info and navigation links.
  - `Feed.jsx`: Fetches and displays posts from Firestore.
  - `Post.jsx`: Displays individual post with media (image/video), user info, and actions.
  - `Input.jsx`: Form for creating new posts, including media upload.
  - `Icons.jsx`: Handles post actions (like, comment, delete), leverages Recoil for modal state.
  - `CommentModal.jsx`: Modal for adding comments to posts.
  - `Comments.jsx`: Fetches and displays comments for a specific post.
  - `Comment.jsx`: Displays an individual comment, supports liking and deleting.
  - `News.jsx`: Displays campus news articles and allows loading more.
  - `SessionWrapper.jsx`: Wraps app in authentication session context.

- **src/atom/**  
  - `modalAto.js`: Recoil atom state for modal and post ID.

- **public/**  
  - Static assets (images, etc.).

- **tailwind.config.js**  
  - Tailwind CSS configuration for styling.

- **firebase.js**  
  - Firebase initialization and configuration.

## Main Features

- **Authentication:** Uses NextAuth for login/session management.
- **Posting:** Users can share text, images, and videos.
- **Feed:** Posts are displayed in reverse chronological order.
- **Likes & Comments:** Users can interact with posts through likes and threaded comments.
- **News Section:** Aggregates and displays campus news.
- **Responsive Design:** Built with Tailwind CSS for modern UI and responsiveness.

## Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the app. Edit files in `src/app/page.js` to see live updates.

## Deployment

The easiest way to deploy your Next.js app is on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

Refer to the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js/)

---

This project is public and open for contributions!
