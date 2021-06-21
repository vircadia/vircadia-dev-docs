# Domain Server

The Vircadia Domain server is developed in this [repository](https://github.com/vircadia/vircadia) and uses the following stack:

1. [Qt & QML](https://qt.io/) - C++ framework with UI components
1. Tooling
    1. [VCPKG](https://github.com/microsoft/vcpkg)
    1. [CMake](https://cmake.org/)

## Features

* To enable scaling for hundreds or thousands of users in one instance, all major functions (avatars, entities, assets, messaging, etc.) are broken out into subprocesses called [Assignment clients](./assignment-client/).
* Connects with users over WebRTC and UDP simultaneously.
* Persistent world state.
* Rolling backups for world state.
* Server side scripting in JavaScript.
* Communication
    * Realtime spatial audio for all clients
    * Server-wide text messaging

## [Assignment Client](./assignment-client/)

The Domain server deploys a type of server called an Assignment client to provide different functionalities to a virtual world.

## [Command Line Parameters](./command-line-parameters.md)
## [Environment Variables](./environment-variables.md)

## Compiling from Source

You can find general build information [here](https://github.com/vircadia/vircadia/blob/master/BUILD.md#general-build-information).

Specific build information for each platform:
* [Windows](https://github.com/vircadia/vircadia/blob/master/BUILD_WIN.md#build-windows)
* [Linux](https://github.com/vircadia/vircadia/blob/master/BUILD_LINUX.md#build-linux)
* [MacOS](https://github.com/vircadia/vircadia/blob/master/BUILD_OSX.md#build-osx)

## Packaging

All packaging specific information and steps for the Vircadia Domain server can be found [here](https://github.com/vircadia/vircadia/blob/master/INSTALLER.md#creating-an-installer).
