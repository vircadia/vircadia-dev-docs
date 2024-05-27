---
sidebar_position: 1
slug: /interfaces/web
---

# Overview

The Vircadia Web Interface (codename Aether) is developed in this [repository](https://github.com/vircadia/vircadia-web) and uses the following stack:

1. [Quasar](https://quasar.dev/) - UI components
1. [Vue.js](https://v3.vuejs.org/) - Reactive UI framework
1. [Babylon.JS](https://www.babylonjs.com/) - Game and rendering engine
1. Tooling
   1. [Webpack](https://webpack.js.org/) - Packaging
   1. [Babel](https://babeljs.io/) - Compilation
   1. [ESLint](https://eslint.org/) - Code linting
   1. [Jest](https://jestjs.io/) - Code testing

It relies heavily upon the [Vircadia Web SDK](../../sdks/web/) for its networking, metaverse, and scripting functionality.

## Network

A normal web port (e.g. 80) must be opened to allow users to download and use the client from a web page.
