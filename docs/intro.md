---
sidebar_position: 1
slug: /
---

# Introduction

The Vircadia virtual world ecosystem is comprised of many components.

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
