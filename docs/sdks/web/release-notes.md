# Release Notes

## v2022.1.0 (3/12/2021)

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
