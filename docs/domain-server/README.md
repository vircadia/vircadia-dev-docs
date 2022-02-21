---
sidebar_position: 1
slug: /domain-server
---

# Overview

The Vircadia Domain server (codename Athena) is developed in this [repository](https://github.com/vircadia/vircadia) and uses the following stack:

1. HTML & JavaScript - Web based control panel
1. [Qt](https://qt.io/) - C++ framework
1. Tooling
    1. [VCPKG](https://github.com/microsoft/vcpkg)
    1. [CMake](https://cmake.org/)

### [Command Line Parameters](./command-line-parameters.md)
### [Environment Variables](./environment-variables.md)

## Features

* Networking
    * To support web, desktop, and mobile users in the same space, the Domain server connects with users over WebRTC and UDP simultaneously
* Persistence
    * The world's state is continuously persisted to disk
    * The persisted state can be saved to a snapshot at any time
    * The persisted state is also backed up regularly through a rolling schedule
* Scalability & Robustness
    * To enable scaling for hundreds or thousands of users in one instance, all major functions (avatars, entities, assets, messaging, etc.) are broken out into sub processes called Assignment clients
    * Due to the rapid start and stop of Assignment clients, the scaling of worlds and recovery of mixers in real-time is nearly instant
* Functionality
    * Server side scripting in JavaScript
    * Extend core with C++ plugins
* Communication
    * Realtime spatial audio for all clients
    * Server-wide text messaging

## Compiling from Source

You can find general build information [here](https://github.com/vircadia/vircadia/blob/master/BUILD.md#general-build-information).

Specific build information for each platform:
* [Windows](https://github.com/vircadia/vircadia/blob/master/BUILD_WIN.md#build-windows)
* [Linux](https://github.com/vircadia/vircadia/blob/master/BUILD_LINUX.md#build-linux)
* [MacOS](https://github.com/vircadia/vircadia/blob/master/BUILD_OSX.md#build-osx)

## Packaging

All packaging specific information and steps for the Vircadia Domain server can be found [here](https://github.com/vircadia/vircadia/blob/master/INSTALLER.md#creating-an-installer).

## Configuration

For configuration instructions, see the [Hosting section of the user docs](https://docs.vircadia.com/host.html).

## Assignment Clients

### [Command Line Parameters for Assignment Clients](./command-line-parameters-for-assignment-clients.md)

The Domain server deploys a type of server called an Assignment client to provide different functionalities to a virtual world. Six types are defined and the domain server will spin up one instance of each:

* **Asset Server** - Allows the upload and download of files from the server.
* **Audio Mixer** - Receives all audio streams and mixes them into single streams to send out to each node (user).
* **Avatar Mixer** - Receives all avatar and joint data and mixes them into single streams to send out to each node (user).
* **Entity Mixer** - Handles the state of all entities and their respective properties in a virtual world.
* **Entity Script Server** - Provides server side scripting functionality.
* **Messaging Mixer** - Handles all messaging activity between nodes on the domain (users).
