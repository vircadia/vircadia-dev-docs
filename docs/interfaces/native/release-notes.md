# Release Notes

## 2022.1.0 (26/11/2021)

#### Enhancements

- [**packet version change**][**domain-server**] Enable WebRTC connections to be made to the Domain, i.e., add Web client support. [#1469](https://github.com/vircadia/vircadia/pull/1469)
-  Create app: Script indicator toggles for both entity client & server scripts. [#1444](https://github.com/vircadia/vircadia/pull/1444)
- [**linux**] Require OpenSSL 1.1.0 during CMake. [#1436](https://github.com/vircadia/vircadia/pull/1436)
-  Changed preset framerates; Add "low power" preset. [#1422](https://github.com/vircadia/vircadia/pull/1422)
-  Add antialiasing setting. [#1427](https://github.com/vircadia/vircadia/pull/1427)
- [**web sdk**] Update WebRTC for Linux. [#1406](https://github.com/vircadia/vircadia/pull/1406)
- [**domain-server**] Overhaul the Domain server's onboarding wizard. [#1344](https://github.com/vircadia/vircadia/pull/1344)
-  Housekeeping: Update use of Q_DISABLE_COPY. [#1352](https://github.com/vircadia/vircadia/pull/1352)
- [**linux**] Add support for aarch64 (ARM) Linux builds on GitHub Actions. [#1346](https://github.com/vircadia/vircadia/pull/1346)
-  Improve use of "#include <QtCore/QSharedPointer>" in codebase. [#1336](https://github.com/vircadia/vircadia/pull/1336)

#### Bug Fixes

-  Fix for _meshStates.empty() assertion. [#1465](https://github.com/vircadia/vircadia/pull/1465)
-  Fix automatic texture memory bug. [#1475](https://github.com/vircadia/vircadia/pull/1475)
-  Fix SSL WebSocket Domain server crash. [#1467](https://github.com/vircadia/vircadia/pull/1467)
- [**domain-server**] Fixed empty POST request to settings.json crashing the Domain server. [#1438](https://github.com/vircadia/vircadia/pull/1438)
- [**domain-server**] Fix mime type for serving .htm and .html files with the embedded webserver. [#1435](https://github.com/vircadia/vircadia/pull/1435)
- [**renderer**][**macos**] Fix automatic texture memory on macOS, Android, OpenGL ES, and Intel graphics. [#1398](https://github.com/vircadia/vircadia/pull/1398)
- [**needs QA (testing)**][**needs CR (code review)**][**macos**] Fix crashpad on macOS. [#1407](https://github.com/vircadia/vircadia/pull/1407)
-  Fix GHA on MacOS. [#1386](https://github.com/vircadia/vircadia/pull/1386)
- [**docs**][**housekeeping**] Update API documentation for "created" properties. [#1360](https://github.com/vircadia/vircadia/pull/1360)
- [**audio-mixer**] Fix crash due to audio packet loss with PCM and zlib codecs. [#1366](https://github.com/vircadia/vircadia/pull/1366)
-  Get "make-deb-server" working again with Qt changes to Vircadia builder. [#1354](https://github.com/vircadia/vircadia/pull/1354)

#### Docs

- [**docs**] Update MacOS build guide. [#1414](https://github.com/vircadia/vircadia/pull/1414)

#### In Development

- [**web sdk**] WebRTC revisions and updates including the addition of secure connections. [#1429](https://github.com/vircadia/vircadia/pull/1429)
- [**housekeeping**][**web sdk**] Networking code tidying and dead code removal. [#1415](https://github.com/vircadia/vircadia/pull/1415)
- [**web sdk**] Update webapp branch with the latest master. [#1383](https://github.com/vircadia/vircadia/pull/1383)
- [**packet version change**] Enable assignment client protocol communications over WebRTC. [#1333](https://github.com/vircadia/vircadia/pull/1333)
