# Domain Server

The Vircadia Domain server is developed in this [repository](https://github.com/vircadia/vircadia) and uses the following stack:

1. HTML & JavaScript - Web based control panel
1. [Qt](https://qt.io/) - C++ framework
1. Tooling
    1. [VCPKG](https://github.com/microsoft/vcpkg)
    1. [CMake](https://cmake.org/)

## Features

* Networking
    * To support web, desktop, and mobile users in the same space, the Domain server connects with users over WebRTC and UDP simultaneously
* Persistence
    * The world's state is continuously persisted to disk
    * The persisted state can be saved to a snapshot at any time
    * The persisted state is also backed up regularly through a rolling schedule
* Scalability & Robustness
    * To enable scaling for hundreds or thousands of users in one instance, all major functions (avatars, entities, assets, messaging, etc.) are broken out into sub processes called [Assignment clients](./assignment-client/)
    * Due to the rapid start and stop of Assignment clients, the scaling of worlds and recovery of mixers in real-time is nearly instant
* Functionality
    * Server side scripting in JavaScript
    * Extend core with C++ plugins
* Communication
    * Realtime spatial audio for all clients
    * Server-wide text messaging

### Performance

* Specs: Amazon EC2 C5a (32 AMD Epyc cores)
* Audio Codec: Opus, tuned for quality.
* All mixers on the same instance

A test conducted under these conditions during a live conference in world yielded 4.5 users per core with 32 cores, therefore maxing out at 140 users.

Under a configuration with more cores, a performance tuned audio codec, and splitting assignment clients across multiple servers it is possible to support many hundreds of users in real-time, in a single instance.

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
