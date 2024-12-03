This is a [Next.js](https://nextjs.org) template with MUI, Docker CI through github actions, using NPM

## Getting Started
There is some minor first time setup we need to do to get the template working.

### Setting up Github Actions
We need to define some secrets for github actions to work to publish our image when we make changes.
- DOCKER_CR_ENDPOINT: This is the endpoint that images will be pushed to. Dockerhub is "docker.io" for example.
- DOCKER_CR_USERNAME: The username that we will use to login to the specified registry.
- DOCKER_CR_PASSWORD: The password we will use to authenticate with the registry.

We also need to define a variable for our image name:
- DOCKER_IMAGE_NAME: This is the base image name we will build with. It should be something like: "carbonneuron/{name}". 


### Setting up the development server

First, install the dependencies
```bash
npm install
```

To start the development server run:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.
