# Release Notes


## v2023.1.2 (17 Oct 2023)

### What's Changed
* Export missing types. by @Gigabyte5671 in [#271](https://github.com/vircadia/vircadia-web-sdk/pull/271)

### New Contributors
* @Gigabyte5671 made their first contribution in [#271](https://github.com/vircadia/vircadia-web-sdk/pull/271)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2023.1.1...v2023.1.2)


## v2023.1.1 (22 Mar 2023)

### What's Changed
* Fix npm install peer dependency errors. by @ctrlaltdavid in [#264](https://github.com/vircadia/vircadia-web-sdk/pull/264)
* Fixed the order of audio frames coming out of audio input frame buffer. by @namark in [#269](https://github.com/vircadia/vircadia-web-sdk/pull/269)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2023.1.0...v2023.1.1)


## v2023.1.0 (8 Feb 2023)

### What's Changed
* Use metaverse OAuth for authentication on the domain. by @ctrlaltdavid in [#243](https://github.com/vircadia/vircadia-web-sdk/pull/243)
* Add admin mute and kick capabilities. by @ctrlaltdavid in [#249](https://github.com/vircadia/vircadia-web-sdk/pull/249)
* Fix for the subImage property on image entities not getting set correctly. by @Madders in [#245](https://github.com/vircadia/vircadia-web-sdk/pull/245)
* Keep Axios at version 1.2.2. by @ctrlaltdavid in [#250](https://github.com/vircadia/vircadia-web-sdk/pull/250)
* Temporarily disable resetting on session or local ID change. by @ctrlaltdavid in [#255](https://github.com/vircadia/vircadia-web-sdk/pull/255)
* Double the received audio jitter buffer size. by @namark in [#237](https://github.com/vircadia/vircadia-web-sdk/pull/237)
* Ramp audio packet volume up/down on either side of silent samples. by @namark in [#238](https://github.com/vircadia/vircadia-web-sdk/pull/238)
* Add fingerprint code for browser environment. by @ctrlaltdavid in [#258](https://github.com/vircadia/vircadia-web-sdk/pull/258)
* Update contributors list. by @ctrlaltdavid in [#260](https://github.com/vircadia/vircadia-web-sdk/pull/260)

### New Contributors
* @Madders made their first contribution in [#245](https://github.com/vircadia/vircadia-web-sdk/pull/245)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.18...v2023.1.0)


## v2022.1.18 (15 Nov 2022)

Audio output improvements and an entity reading bug fix.

### What's Changed
* Handle audio output packet sequencing. by @ctrlaltdavid in [#233](https://github.com/vircadia/vircadia-web-sdk/pull/233)
* Fix entity reading bug. by @ctrlaltdavid in [#235](https://github.com/vircadia/vircadia-web-sdk/pull/235)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.17...v2022.1.18)


## v2022.1.17 (20 Oct 2022)

Audio output improvements.

### What's Changed
* Handle droppable silent audio frames. by @ctrlaltdavid in [#228](https://github.com/vircadia/vircadia-web-sdk/pull/228)
* Improve handling of audio output jitter buffer overflow. by @ctrlaltdavid in [#229](https://github.com/vircadia/vircadia-web-sdk/pull/229)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.16...v2022.1.17)


## v2022.1.16 (10 Oct 2022)

Fixed audio input sampling for Firefox.

### What's Changed
* Fix audio input resampling for Firefox. by @ctrlaltdavid in [#218](https://github.com/vircadia/vircadia-web-sdk/pull/218)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.15...v2022.1.16)


## v2022.1.15 (5 Oct 2022)

Improve audio output buffering for better quality audio.

### What's Changed
* Fix audio output choppiness. by @ctrlaltdavid in [#216](https://github.com/vircadia/vircadia-web-sdk/pull/216)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.14...v2022.1.15)


## v2022.1.14 (26 Sep 2022)

Fix avatar skeleton data handling.

### What's Changed
* Fix avatar skeleton data handling. by @ctrlaltdavid in [#214](https://github.com/vircadia/vircadia-web-sdk/pull/214)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.13...v2022.1.14)


## v2022.1.13 (15 Sep 2022)

Add AudioMixer avatar orientation getter property.

### What's Changed
* Add avatar orientation getter property to AudioMixer. by @ctrlaltdavid in [#196](https://github.com/vircadia/vircadia-web-sdk/pull/196)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.12...v2022.1.13)


## v2022.1.12 (31 Aug 2022)

Improves making a connection to a domain.

### What's Changed
* Don't overwrite "open" state. by @ctrlaltdavid in [#191](https://github.com/vircadia/vircadia-web-sdk/pull/191)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.11...v2022.1.12)


## v2022.1.11 (30 Aug 2022)

Improves network connectivity.

### What's Changed
* Revert networking timeouts to native client values. by @ctrlaltdavid in [#187](https://github.com/vircadia/vircadia-web-sdk/pull/187)
* Update unit test. by @ctrlaltdavid in [#188](https://github.com/vircadia/vircadia-web-sdk/pull/188)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.10...v2022.1.11)


## v2022.1.10 (30 Aug 2022)

Provides non-admin facilities for the "People" app: users' audio loudness, set volumes for each user, mute a user, ignore a user, request data continue to be provided for muted / ignored users.

### What's Changed
* Delete traits for removed avatar. by @ctrlaltdavid in [#184](https://github.com/vircadia/vircadia-web-sdk/pull/184)
* Add DomainServer.users interface for working with users in the domain. by @ctrlaltdavid in [#186](https://github.com/vircadia/vircadia-web-sdk/pull/186)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.9...v2022.1.10)


## v2022.1.9 (25 Aug 2922)

Improves connectivity to the domain server &mdash; domain server restarts, assignment client restarts, network interruptions.

### What's Changed
* Handle domain server starting, restarting, and stopping. by @ctrlaltdavid in [#171](https://github.com/vircadia/vircadia-web-sdk/pull/171)
* Handle assignment client restarts. by @ctrlaltdavid in [#172](https://github.com/vircadia/vircadia-web-sdk/pull/172)
* Handle network interruptions. by @ctrlaltdavid in [#173](https://github.com/vircadia/vircadia-web-sdk/pull/173)
* Clear example app's entity list upon entity server disconnect. by @ctrlaltdavid in [#179](https://github.com/vircadia/vircadia-web-sdk/pull/179)
* Fix ComponentMode unit test file type. by @ctrlaltdavid in [#180](https://github.com/vircadia/vircadia-web-sdk/pull/180)
* Update package-lock.json. by @ctrlaltdavid in [#181](https://github.com/vircadia/vircadia-web-sdk/pull/181)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.8...v2022.1.9)


## v2022.1.8 (17 Aug 2022)

Provides the Material, Zone, and ParticleEffect entities in the domain.

### What's Changed
* Add Material entity reading. by @ctrlaltdavid in [#162](https://github.com/vircadia/vircadia-web-sdk/pull/162)
* Fix Uuid user documentation links. by @ctrlaltdavid in [#163](https://github.com/vircadia/vircadia-web-sdk/pull/163)
* Add unit tests for reading Web and Light entity packets. by @ctrlaltdavid in [#164](https://github.com/vircadia/vircadia-web-sdk/pull/164)
* Add Zone entity reading. by @ctrlaltdavid in [#165](https://github.com/vircadia/vircadia-web-sdk/pull/165)
* Add ParticleEffect entity reading. by @ctrlaltdavid in [#166](https://github.com/vircadia/vircadia-web-sdk/pull/166)
* Tidy entities properties documentation. by @ctrlaltdavid in [#169](https://github.com/vircadia/vircadia-web-sdk/pull/169)
* Update package-lock.json. by @ctrlaltdavid in [#170](https://github.com/vircadia/vircadia-web-sdk/pull/170)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.7...v2022.1.8)


## v2022.1.7 (9 Aug 2022)

Provides the Image, Light, Text, and Web entities in the domain.

### What's Changed
* Add Image and Text entity reading. by @ctrlaltdavid in [#151](https://github.com/vircadia/vircadia-web-sdk/pull/151)
* Merge master into entity-data branch. by @ctrlaltdavid in [#152](https://github.com/vircadia/vircadia-web-sdk/pull/152)
* Add Light and Web entity reading. by @ctrlaltdavid in [#154](https://github.com/vircadia/vircadia-web-sdk/pull/154)
* Return `""` instead of `undefined` for zero-length string properties read. by @ctrlaltdavid in [#156](https://github.com/vircadia/vircadia-web-sdk/pull/156)
* Fix some user documentation. by @ctrlaltdavid in [#158](https://github.com/vircadia/vircadia-web-sdk/pull/158)
* Provide Image, Text, Web, and Light entities. by @ctrlaltdavid in [#159](https://github.com/vircadia/vircadia-web-sdk/pull/159)
* Update package-lock.json. by @ctrlaltdavid in [#160](https://github.com/vircadia/vircadia-web-sdk/pull/160)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.6...v2022.1.7)


## v2022.1.6 (1 Aug 2022)

Provides the Model and Shape entities in the domain.

### What's Changed
* Provide Model entity data. by @julien-me in [#108](https://github.com/vircadia/vircadia-web-sdk/pull/108)
* Resolve entity packet reading details. by @ctrlaltdavid in [#134](https://github.com/vircadia/vircadia-web-sdk/pull/134)
* Provide Shape entity data. by @julien-me in [#135](https://github.com/vircadia/vircadia-web-sdk/pull/135)
* Fix Model entity reading method by @julien-me in [#142](https://github.com/vircadia/vircadia-web-sdk/pull/142)
* Skip over unsupported entity types. by @julien-me in [#143](https://github.com/vircadia/vircadia-web-sdk/pull/143)
* Add Model and Shape entities support. by @ctrlaltdavid in [#145](https://github.com/vircadia/vircadia-web-sdk/pull/145)
* Housekeeping by @ctrlaltdavid in [#148](https://github.com/vircadia/vircadia-web-sdk/pull/148)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.5...v2022.1.6)


## v2022.1.5 (5 Jul 2022)

Handles the default domain viewpoint path (/) when connecting to a domain, Additionally, a path can be specified in the URL being connected to, e.g., `wss://n.n.n.n:40102/somewhere`.

### What's Changed
* Provide the domain's default avatar position. by @ctrlaltdavid in [#126](https://github.com/vircadia/vircadia-web-sdk/pull/126)
* Reduce number of OctreePacketProcessor warnings logged. by @ctrlaltdavid in [#127](https://github.com/vircadia/vircadia-web-sdk/pull/127)
* Bump version number and package files. by @ctrlaltdavid in [#129](https://github.com/vircadia/vircadia-web-sdk/pull/129)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.4...v2022.1.5)


## v2022.1.4 (28 Jun 2022)

Fixes bad build of 2022.1.3 release.

### What's Changed
* Update README.md. by @digisomni in [#120](https://github.com/vircadia/vircadia-web-sdk/pull/120)
* Release preparations. by @ctrlaltdavid in [#123](https://github.com/vircadia/vircadia-web-sdk/pull/123)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.3...v2022.1.4)


## v2022.1.3 (27 Jun 2022)

### What's Changed
* Add instructions for publishing the SDK to NPMJS. by @ctrlaltdavid in [#88](https://github.com/vircadia/vircadia-web-sdk/pull/88)
* Add networking overview document. by @ctrlaltdavid in [#90](https://github.com/vircadia/vircadia-web-sdk/pull/90)
* Fix trailing 0s being sent in NLPacketList packets. by @ctrlaltdavid in [#91](https://github.com/vircadia/vircadia-web-sdk/pull/91)
* Add EntityServer design document. by @ctrlaltdavid in [#92](https://github.com/vircadia/vircadia-web-sdk/pull/92)
* Add entity server class. by @julien-me in [#93](https://github.com/vircadia/vircadia-web-sdk/pull/93)
* Fix erroneous spaces in C++ comments. by @ctrlaltdavid in [#94](https://github.com/vircadia/vircadia-web-sdk/pull/94)
* Add set own avatar URL functionality. by @ctrlaltdavid in [#95](https://github.com/vircadia/vircadia-web-sdk/pull/95)
* Request avatar data. by @ctrlaltdavid in [#97](https://github.com/vircadia/vircadia-web-sdk/pull/97)
* Request entity data. by @julien-me in [#98](https://github.com/vircadia/vircadia-web-sdk/pull/98)
* Merge entity-server branch into master. by @ctrlaltdavid in [#100](https://github.com/vircadia/vircadia-web-sdk/pull/100)
* Address repo line endings. by @ctrlaltdavid in [#104](https://github.com/vircadia/vircadia-web-sdk/pull/104)
* Receive entity server packets. by @julien-me in [#105](https://github.com/vircadia/vircadia-web-sdk/pull/105)
* Handle entity data packets. by @julien-me in [#106](https://github.com/vircadia/vircadia-web-sdk/pull/106)
* Provide other users' avatar model URLs. by @ctrlaltdavid in [#107](https://github.com/vircadia/vircadia-web-sdk/pull/107)
* Provide skeleton data for other users' avatars. by @ctrlaltdavid in [#109](https://github.com/vircadia/vircadia-web-sdk/pull/109)
* Provide avatar scale for other users' avatars. by @ctrlaltdavid in [#110](https://github.com/vircadia/vircadia-web-sdk/pull/110)
* Provide avatar joint data for others' avatars. by @ctrlaltdavid in [#111](https://github.com/vircadia/vircadia-web-sdk/pull/111)
* Enable sending own avatar skeleton to avatar mixer. by @ctrlaltdavid in [#113](https://github.com/vircadia/vircadia-web-sdk/pull/113)
* Add MyAvatar scale and targetScale. by @ctrlaltdavid in [#116](https://github.com/vircadia/vircadia-web-sdk/pull/116)
* Add ability to send own avatar joint data to avatar mixer. by @ctrlaltdavid in [#117](https://github.com/vircadia/vircadia-web-sdk/pull/117)
* Fix skipping deleting an instanced trait when reading BulkAvatarTraits message. by @ctrlaltdavid in [#118](https://github.com/vircadia/vircadia-web-sdk/pull/118)
* Replace non-functioning STUN server address. by @ctrlaltdavid in [#119](https://github.com/vircadia/vircadia-web-sdk/pull/119)

### New Contributors
* @julien-me made their first contribution in [#93](https://github.com/vircadia/vircadia-web-sdk/pull/93)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.2...v2022.1.3)

## v2022.1.2 (6 Feb 2022)

### What's Changed
* Increment version number to 2022.1.1. by @ctrlaltdavid in [#73](https://github.com/vircadia/vircadia-web-sdk/pull/73)
* Update developer setup instructions. by @ctrlaltdavid in [#74](https://github.com/vircadia/vircadia-web-sdk/pull/74)
* Make audio worklets able to be loaded from a relative path. by @ctrlaltdavid in [#75](https://github.com/vircadia/vircadia-web-sdk/pull/75)
* Add SDK packaging instructions and update .gitignore. by @ctrlaltdavid in [#79](https://github.com/vircadia/vircadia-web-sdk/pull/79)
* Add avatar orientations in MyAvatarInterface and AvatarListInterface. by @ctrlaltdavid in [#80](https://github.com/vircadia/vircadia-web-sdk/pull/80)
* Fix AudioMixer.audioOutput property name. by @ctrlaltdavid in [#81](https://github.com/vircadia/vircadia-web-sdk/pull/81)
* Add missing packet details links to packet type list. by @ctrlaltdavid in [#82](https://github.com/vircadia/vircadia-web-sdk/pull/82)
* Fix ESLint dot-notation rule. by @ctrlaltdavid in [#85](https://github.com/vircadia/vircadia-web-sdk/pull/85)
* Fix TypeScript .d.ts files not being found when using the SDK. by @ctrlaltdavid in [#87](https://github.com/vircadia/vircadia-web-sdk/pull/87)

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v2022.1.0...v2022.1.2)

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

[Full Changelog](https://github.com/vircadia/vircadia-web-sdk/compare/v0.0.1...v2022.1.0)
