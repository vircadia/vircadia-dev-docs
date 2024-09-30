# Vircadia Developer Documentation

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Cloning with Submodules

To clone this repository including all submodules, use the following command:

```sh
git clone --recursive https://github.com/vircadia/vircadia-dev-docs.git
```

If you forgot to clone with the submodules, you can initialize and update them with:

```sh
git submodule update --init --recursive
```
