# NodeJS Website Feed

Bare bones off the shelf website feed for NodeJS, including Client Credentials authentication, fetching of a property list with images and rendering in a template.

### Getting started

1. Clone the repo and navigate to this directory
2. `yarn` or `npm install`
3. Create an app at `https://developers.reapit.cloud/apps/new`, selecting the "website feed option"
4. Obtain your client credentials from `https://developers.reapit.cloud/apps/:yourAppId`
5. Re-name the `src/.env.example` file to `.env` and add your `clientId` and `clientSecret`
6. `yarn dev` or `npm run dev` to run a development server (`yarn start` or `npm run start` in prod)
7. Load your browser at `http://localhost:3000`
