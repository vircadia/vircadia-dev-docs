# Introduction

The Vircadia ecosystem is comprised of many components.

## Ecosystem

* [Clients](../interfaces/)
  * [Web Interface](../interfaces/web/) (All platforms)
  * [Native Interface](../interfaces/native/) (Windows, Linux, MacOS)
* [Domain Server](../domain-server/) (Windows, Linux)
* [Metaverse Server](../metaverse-server/) (Windows, Linux)
  * Dashboard (...)
* [SDKs](../sdks/)
  * [Web](../sdks/web/)

## Release Cycle

Vircadia's primary components are released in the following order:

1. A branch and tag are created to signify the release.
2. Release candidate builds are created from this branch and shared.
    1. If any revisions are needed, they are merged into the release branch.
    2. New release candidate builds are generated from the release branch.
3. After testing completes with high enough confidence, the release build is generated from the release branch and shared.
4. The release branch is merged into master if there were any revisions made. The branch does not get deleted afterwards.

Components that are early in their development cycle are updated instantly and independently, usually with little testing. This is to allow for quick and agile development.

> **_NOTE:_** Components follow [semantic versioning](https://semver.org/) guidelines.
