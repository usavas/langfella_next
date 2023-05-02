# LangFella

## Deploy

### Create a docker container for libretranslate server

`docker pull libretranslate/libretranslate`

`docker run --name libretranslate -p 6000:5000 libretranslate`

(wait for libretranslate to finish downloading the dictionaries etc. before starting the app)

### Deploy the project

`npm run build`

### Run the project

`npm run start`

This application and docker container must run on the same network.
Application sends request to libretranslate docker container on port 6000 to get translations.

## Important Notes About Nexjs & Prisma

Because Prisma Client is tailored to your own schema, you need to update it every time your Prisma schema file is changing by running the following command:

npx prisma generate

(Explanations Here on prisma client)[https://vercel.com/guides/nextjs-prisma-postgres]
