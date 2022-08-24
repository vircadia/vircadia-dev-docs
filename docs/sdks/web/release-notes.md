# Release Notes

## v2022.1.9 (25 Aug 2922)

Improves connectivity to the domain server &mdash; domain server restarts, assignment client restarts, network interruptions.

### What's Changed

## What's Changed
* Handle domain server starting, restarting, and stopping. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/171
* Handle assignment client restarts. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/172
* Handle network interruptions. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/173
* Fix ComponentMode unit test file type. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/180
* Clear example app's entity list upon entity server disconnect. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/179
* Update package-lock.json. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/181

**Full Changelog**: https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.8...v2022.1.9


## v2022.1.8 (17 Aug 2022)

Provides the Material, Zone, and ParticleEffect entities in the domain.

### What's Changed
* Add Material entity reading. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/162
* Fix Uuid user documentation links. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/163
* Add unit tests for reading Web and Light entity packets. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/164
* Add Zone entity reading. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/165
* Add ParticleEffect entity reading. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/166
* Tidy entities properties documentation. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/169
* Update package-lock.json. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/170

**Full Changelog**: https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.7...v2022.1.8


## v2022.1.7 (9 Aug 2022)

Provides the Image, Light, Text, and Web entities in the domain.

### What's Changed
* Add Image and Text entity reading. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/151
* Merge master into entity-data branch. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/152
* Add Light and Web entity reading. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/154
* Fix some user documentation. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/158
* Return `""` instead of `undefined` for zero-length string properties read. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/156
* Provide Image, Text, Web, and Light entities. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/159
* Update package-lock.json. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/160

**Full Changelog**: https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.6...v2022.1.7


## v2022.1.6 (1 Aug 2022)

Provides the Model and Shape entities in the domain.

### What's Changed
* Provide Model entity data. by @julien-me in https://github.com/vircadia/vircadia-web-sdk/pull/108
* Resolve entity packet reading details. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/134
* Provide Shape entity data. by @julien-me in https://github.com/vircadia/vircadia-web-sdk/pull/135
* Fix Model entity reading method by @julien-me in https://github.com/vircadia/vircadia-web-sdk/pull/142
* Skip over unsupported entity types. by @julien-me in https://github.com/vircadia/vircadia-web-sdk/pull/143
* Add Model and Shape entities support. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/145
* Housekeeping by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/148

**Full Changelog**: https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.5...v2022.1.6


## v2022.1.5 (5 Jul 2022)

Handles the default domain viewpoint path (/) when connecting to a domain, Additionally, a path can be specified in the URL being connected to, e.g., `wss://n.n.n.n:40102/somewhere`.

### What's Changed
* Reduce number of OctreePacketProcessor warnings logged. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/127
* Provide the domain's default avatar position. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/126
* Bump version number and package files. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/129

**Full Changelog**: https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.4...v2022.1.5


## v2022.1.4 (28 Jun 2022)

Fixes bad build of 2022.1.3 release.

### What's Changed
* Update README.md. by @digisomni in https://github.com/vircadia/vircadia-web-sdk/pull/120
* Release preparations. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/123

**Full Changelog**: https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.3...v2022.1.4


## v2022.1.3 (27 Jun 2022)

### What's Changed
* Add instructions for publishing the SDK to NPMJS. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/88
* Add networking overview document. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/90
* Fix trailing 0s being sent in NLPacketList packets. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/91
* Add EntityServer design document. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/92
* Add entity server class. by @julien-me in https://github.com/vircadia/vircadia-web-sdk/pull/93
* Fix erroneous spaces in C++ comments. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/94
* Add set own avatar URL functionality. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/95
* Request entity data. by @julien-me in https://github.com/vircadia/vircadia-web-sdk/pull/98
* Request avatar data. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/97
* Merge entity-server branch into master. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/100
* Address repo line endings. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/104
* Receive entity server packets. by @julien-me in https://github.com/vircadia/vircadia-web-sdk/pull/105
* Handle entity data packets. by @julien-me in https://github.com/vircadia/vircadia-web-sdk/pull/106
* Provide other users' avatar model URLs. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/107
* Provide skeleton data for other users' avatars. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/109
* Provide avatar scale for other users' avatars. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/110
* Provide avatar joint data for others' avatars. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/111
* Enable sending own avatar skeleton to avatar mixer. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/113
* Add MyAvatar scale and targetScale. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/116
* Add ability to send own avatar joint data to avatar mixer. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/117
* Fix skipping deleting an instanced trait when reading BulkAvatarTraits message. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/118
* Replace non-functioning STUN server address. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/119

### New Contributors
* @julien-me made their first contribution in https://github.com/vircadia/vircadia-web-sdk/pull/93

**Full Changelog**: https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.2...v2022.1.3

## v2022.1.2 (6 Feb 2022)

### What's Changed
* Increment version number to 2022.1.1. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/73
* Update developer setup instructions. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/74
* Make audio worklets able to be loaded from a relative path. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/75
* Add SDK packaging instructions and update .gitignore. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/79
* Fix AudioMixer.audioOutput property name. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/81
* Add missing packet details links to packet type list. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/82
* Add avatar orientations in MyAvatarInterface and AvatarListInterface. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/80
* Fix ESLint dot-notation rule. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/85
* Fix TypeScript .d.ts files not being found when using the SDK. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web-sdk/pull/87

[Full changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.0...v2022.1.2)

## v2022.1.0 (3 Dec 2021)

### Enhancements
* Add initial audio mixer API functionality. by @ctrlaltdavid in [#28](https://github.com/vircadia/vircadia-web-sdk/pull/28)
* Add .grenrc.js configuration file for changelog generation. by @digisomni in [#29](https://github.com/vircadia/vircadia-web-sdk/pull/29)
* Provide connection state types and Signal class in the API by @ctrlaltdavid in [#40](https://github.com/vircadia/vircadia-web-sdk/pull/40)
* Changes to package.json enabling "npm pack" to create npm installable package. by @Misterblue in [#41](https://github.com/vircadia/vircadia-web-sdk/pull/41)
* Message mixer functionality by @ctrlaltdavid in [#42](https://github.com/vircadia/vircadia-web-sdk/pull/42)
* Add initial avatar mixer functionality. by @ctrlaltdavid in [#55](https://github.com/vircadia/vircadia-web-sdk/pull/55)
* Add build versioning to SDK. by @Misterblue in [#60](https://github.com/vircadia/vircadia-web-sdk/pull/60)
* Handle (but ignore content of) BulkAvatarTraits packets. by @ctrlaltdavid in [#64](https://github.com/vircadia/vircadia-web-sdk/pull/64)
* Implement packet (un)obfuscation support. by @ctrlaltdavid in [#65](https://github.com/vircadia/vircadia-web-sdk/pull/65)
* Log certain warnings only once. by @ctrlaltdavid in [#68](https://github.com/vircadia/vircadia-web-sdk/pull/68)
* Override properties of test.config.json with environment variables. by @namark in [#70](https://github.com/vircadia/vircadia-web-sdk/pull/70)
* Update version number to 2022.1.0. by @ctrlaltdavid in [#72](https://github.com/vircadia/vircadia-web-sdk/pull/72)

### Bug Fixes
* Fix typos and update .grenrc.js. by @digisomni in [#34](https://github.com/vircadia/vircadia-web-sdk/pull/34)
* Update audio input resampling code; improves Firefox support. by @namark in [#43](https://github.com/vircadia/vircadia-web-sdk/pull/43)
* Fix no audio playback if the mic is muted at start-up. by @ctrlaltdavid in [#44](https://github.com/vircadia/vircadia-web-sdk/pull/44)
* WebRTC revisions. by @ctrlaltdavid in [#50](https://github.com/vircadia/vircadia-web-sdk/pull/50)
  * Fix STUN servers used by WebRTC.
  * Fix connecting to public (non-local) domain servers.
* Fix flood of console messages when other user leaves the domain. by @ctrlaltdavid in [#52](https://github.com/vircadia/vircadia-web-sdk/pull/52)
* Fix reading of BulkAvatarData packets. by @ctrlaltdavid in [#63](https://github.com/vircadia/vircadia-web-sdk/pull/63)
* Fix build error. by @ctrlaltdavid in [#67](https://github.com/vircadia/vircadia-web-sdk/pull/67)
* Remove unused code in Audio worklets. by @ctrlaltdavid in [#69](https://github.com/vircadia/vircadia-web-sdk/pull/69)
* Fix lint error. by @ctrlaltdavid in [#71](https://github.com/vircadia/vircadia-web-sdk/pull/71)

[Full changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v0.0.1...v2022.1.0)
