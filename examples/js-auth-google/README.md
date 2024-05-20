# JS Auth Google

The Azion **JS Auth Google** is designed to simplify and enhance the deployment process for Javascript applications directly on the edge of the network.
In this template we are using Google as Auth Provider and using the `auth-js (next-auth) v5 library`.

## Usage Information

### Create Google OAuth Configuration

- [Google OAuth Configuration](https://console.developers.google.com/apis/credentials)

#### Environment

Clone and rename `.env.sample` to `.env` and add the credentials.

```bash

NEXTAUTH_URL=http://localhost:3333
NEXTAUTH_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

```

#### Install dependencies

```bash

npm install
#or
yarn install
#or
pnmp install

```

### Use Vulcan

#### Build Command

To start using this template with **Vulcan**, you need to:

To run the application build command

```bash

npx edge-functions@latest build

```

#### Run local DEV

To run the application locally with Vulcan

```bash

npx edge-functions@latest dev

```

### Use Azion CLI

> Azion CLI [https://www.azion.com/en/documentation/products/azion-cli/overview/](https://www.azion.com/en/documentation/products/azion-cli/overview/)

**To deploy to Production, access the Azion console and insert the environment variables that are in your .env.**

- [Azion Variables](https://console.azion.com/variables)

### Commands to Deploy:

#### Link your project:

```bash

azion link

```

#### Deploy

```bash

azion deploy

```
