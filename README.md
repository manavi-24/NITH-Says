# NITH-Says – Campus Social Platform

NITH-Says is a modern social media platform designed for the students of NIT Hamirpur. It offers a secure, anonymous space to interact, share updates, access college resources, and connect with the campus community.

## Features

- **Anonymous Posting:** Share thoughts, questions, or updates without revealing your identity.
- **Real-Time Interactions:** Instant commenting and liking on posts, powered by Firebase Firestore.
- **Media Uploads:** Attach images and files to posts for richer content.
- **News Feed:** Stay updated with the latest posts and activities from fellow students.
- **Techno Tweets:** Special section for technical updates and quick micro-posts.
- **College Portal Access:** Convenient access to important college resources and portals.
- **Syllabus Search:** Quickly find syllabus and academic material through a dedicated search interface.
- **Authentication:** Secure sign-in with Google Cloud and NextAuth for verified campus users.
- **Responsive UI:** Clean, mobile-first design using Tailwind CSS.

## Tech Stack

- **Frontend:** [Next.js](https://nextjs.org/) – React-based framework for fast, scalable web apps.
- **Backend / Database:** [Firebase Firestore](https://firebase.google.com/products/firestore) – Real-time NoSQL database.
- **Authentication:** [NextAuth.js](https://next-auth.js.org/) – Secure and flexible authentication, integrated with Google Cloud.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for responsive and customizable UI.

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/manavi-24/NITH-Says.git
   cd NITH-Says
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env.local` file in the root directory and add your Firebase, NextAuth, and Google Cloud credentials. Example:
   ```env
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_nextauth_secret
   FIREBASE_API_KEY=your_firebase_api_key
   FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   FIREBASE_PROJECT_ID=your_firebase_project_id
   FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   FIREBASE_APP_ID=your_firebase_app_id
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Visit [http://localhost:3000](http://localhost:3000) to view the app.


## License

This project is licensed under the MIT License.

---

**NITH-Says** – Connect, share, and stay updated with your campus community!
