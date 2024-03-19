# Hugo Static

The Azion **Hugo Static** is designed to simplify and enhance the deployment process for Hexo applications directly on the edge of the network.

This template uses Hugo version `^0.119.0`.

## Usage Information

First, an Hugo theme is necessary.

```bash

git clone https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke

```

_Install dependencies_

```bash

npm install
#or
yarn install
#or
pnmp install

```

To start using this template with **Vulcan**, you need to:

_Build Command_: To run the application build command

```bash

npx edge-functions@latest build

```

_Run local DEV_: To run the application locally with Vulcan

```bash

npx edge-functions@latest dev

```
