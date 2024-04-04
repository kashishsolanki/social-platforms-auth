# Instagram, Tiktok & Youtube Authentication POC App

This is a [Next.js](https://nextjs.org/) project with native methods of authentication for instagram, tiktok and youtube platforms.

### Prerequisites

- Node and npm (or yarn) should be installed

### Installation

1. Clone the repository:
```
git clone git@github.com:kashishsolanki/social-platforms-auth.git
```

2. Navigate into the repository:
```
cd social-platforms-auth
```

3. Install Dependencies:
```
npm install
# or
yarn install
```

### Run the application

```
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### API Routes

- [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

- The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## To make this app run

- Open `src/utils/constants.ts` file.
- Add required secret key values for the platform as per need.
- Once those values are updated, we can save and run the application.

### To get the application required keys

1. Youtube

- [Here](https://blog.hubspot.com/website/how-to-get-youtube-api-key) are the detailed steps for getting youtube keys.

2. Instagram

- [Here](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started) are the detailed steps for setting up the account for instagram login.

3. Tiktok

- [Here](https://medium.com/@kashishsolanki3/integrating-tiktok-login-and-using-the-tiktok-api-815c0f33200b) are the detailed steps for getting tiktok app gets approved and get the keys.
