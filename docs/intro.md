---
sidebar_position: 0
slug: /
---

# Introduction

The Vircadia open source metaverse ecosystem is comprised of many components. [Understand the Architecture](#understand-the-architecture)

## Ecosystem

* [Clients](interfaces/README.md)
  * [Web Interface](interfaces/web/README.md) (All platforms)
  * [Native Interface](interfaces/native/README.md) (Windows, Linux, MacOS)
* [Domain Server](domain-server/README.md) (Windows, Linux)
* [Metaverse Server](metaverse-server/README.md) (Windows, Linux)
  * Dashboard (...)
* [SDKs](sdks/README.md)
  * [Web](sdks/web/README.md)
* [Tools](tools/README.md)
  * [Vircadia Builder](tools/vircadia-builder/README.md) (Linux)

## Release Cycle

Vircadia's primary components are released in the following order:

1. A branch and tag are created to signify the release.
2. Release candidate builds are created from this branch and shared.
    1. If any revisions are needed, they are merged into the release branch.
    2. New release candidate builds are generated from the release branch.
3. After testing completes with high enough confidence, the release build is generated from the release branch and shared.
4. The release branch is merged into master if there were any revisions made. The branch does not get deleted afterwards.

Components that are early in their development cycle are updated instantly and independently, usually with little testing. This is to allow for quick and agile development.

:::tip Note

Component versions follow [semantic versioning](https://semver.org/) guidelines.

:::

## Understand the Architecture

### Architecture Overview

Vircadia's architecture consists of the following components that work together to form a resilient and complete experience.

- The [Interface](#interface) is how users create, interact with, and live within virtual worlds.
- The [Domain Server](#domain-server) is the server that hosts a domain. The domain server hosts the content in the domain, and manages the domain-wide settings, such as audio spatialization, user permissions, running scripts, and more.
- The [Global Services](#global-services) connect all of the domains (servers) together. An instance of these services are maintained by Vircadia for development purposes.

![alt text](_images/overview.png)

### [Interface](/interfaces)

A Vircadia Interface (or simply 'Interface') is one of two user interfaces developed by Vircadia, a developer Interface, and the end-user web Interface. These are used to explore the metaverse and engage with people from around the world. When a user enters a domain, their Interface connects with the [domain server](#domain-server) that is hosting the virtual world, alongside any [global services](#global-services).

![alt text](_images/interface.png)

### [Domain Server](/domain-server)

A domain is the real-time spatial simulation that users visit. It is computed by a stack of programs on one or more servers. The domain's server stack is a set of components that simulate and manage different aspects of the domain such as audio, entities, and avatars. Everything that a user will see, hear, and do in a domain is managed by the server stack.

![alt text](_images/domain-server.png)

#### [Server Stack](/domain-server#assignment-clients)

The Domain server is at the top of this stack and its job is to give out assignments to the other components. These components are called [Assignment Clients](/domain-server#assignment-clients), because from the perspective of the domain server, they are clients that take on different roles.

The server stack is managing and computing the domain as users see it. This means that the domain server hands out simulation assignments and provides their IP addresses to connecting Interface clients. The domain server is a single executable that spawns assignment clients that become the different mixers as requested. Each assignment client can function as one of the six types mentioned. The domain server determines which assignment client functions as which mixer.

Because each assignment client is an independent process, it is possible to spread the load for a single world instance across multiple servers, e.g. deploy a domain's avatar mixer to an independent 64 core server whilst leaving all of the other mixers on a separate shared 64 core instance.

:::tip Note

The domain server manages five dedicated assignment clients, and as many agent assignments clients as needed. However, it is possible to spread the assignment clients over multiple servers, and even to divide each function among a hierarchy of assignment components, which may be on different computers. For instance, multiple audio mixers could be used to mix the audio in different geographic regions of the domain.

:::

## [Global Services](/metaverse-server)

Vircadia maintains global services to connect users and servers together.

![alt text](_images/services.png)

## License

All of Vircadia's primary components are released under an [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) or compatible license.

However, tools, supporting components, and third party projects that are not vital to the normal operation of the ecosystem may be distributed under a different license.
