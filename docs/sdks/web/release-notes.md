# Release Notes

## v2022.1.5 (5 Jul 2022)

Handles the default domain viewpoint path (/) when connecting to a domain, Additionally, a path can be specified in the URL being connected to, e.g., `wss:/n.n.n.n:10402/somewhere`.

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
