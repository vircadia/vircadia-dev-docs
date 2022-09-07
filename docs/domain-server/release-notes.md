# Release Notes

## 2022.1.1 (14/05/2022)

### What's Changed
* Specify macOS SDK to 10.12 on GHA to solve crash when entering fullscreen. by @JulianGro in https://github.com/vircadia/vircadia/pull/1411
* Fix deprecated usage of multiple keys in QHash and QMap. by @daleglass in https://github.com/vircadia/vircadia/pull/1468
* Update API examples to use "vircadia" in mapping names. by @ctrlaltdavid in https://github.com/vircadia/vircadia/pull/1511
* Remove `<thread>` library from main.cpp. by @Penguin-Guru in https://github.com/vircadia/vircadia/pull/1474
* Housekeeping: Update use of "auto" with plugin lists. by @odysseus654 in https://github.com/vircadia/vircadia/pull/1340
* Housekeeping: use of std::make_shared / QSharedPointer::create. by @odysseus654 in https://github.com/vircadia/vircadia/pull/1339
* GHA: Disable compiler optimization on self-hosted runner. by @JulianGro in https://github.com/vircadia/vircadia/pull/1526
* Separate rendering effect settings. by @Penguin-Guru in https://github.com/vircadia/vircadia/pull/1423
* Remove second argument from some playSystemSound() calls in QML. by @Penguin-Guru in https://github.com/vircadia/vircadia/pull/1473
* Remove Vircadia Web app submodule and add automatic detection instead. by @ctrlaltdavid in https://github.com/vircadia/vircadia/pull/1527
* Explore App: Use the placename instead of address (ip:port). by @AleziaKurdis in https://github.com/vircadia/vircadia/pull/1533
* Create App - "Add All Zones" on renderWithZones selector. by @AleziaKurdis in https://github.com/vircadia/vircadia/pull/1519
* Create App: Prevent locked entities and their children from being duplicated. by @AleziaKurdis in https://github.com/vircadia/vircadia/pull/1523
* Fix macOS SDK links in GHA. by @digisomni in https://github.com/vircadia/vircadia/pull/1548
* GHA: Add checksum for macOS SDK for PR and master builds. by @JulianGro in https://github.com/vircadia/vircadia/pull/1528
* Update loops to prevent crash on some GLTF models. by @ksuprynowicz in https://github.com/vircadia/vircadia/pull/1545
* Replace the deprecated QVector::fromStdVector and QVector::toStdVector(). by @daleglass in https://github.com/vircadia/vircadia/pull/1482
* Update qt-builder readme for macOS by @JulianGro in https://github.com/vircadia/vircadia/pull/1546
* Remove extended deadlock wait on macOS by @JulianGro in https://github.com/vircadia/vircadia/pull/1547
* Fixed metallic material import for glTF. by @ksuprynowicz in https://github.com/vircadia/vircadia/pull/1552
* Fixed memcpy in loadSpirvResource by @ksuprynowicz in https://github.com/vircadia/vircadia/pull/1553
* Choose right Qt version for Linux Mint 19.x. by @JulianGro in https://github.com/vircadia/vircadia/pull/1554
* Resolve #1557 where Windows builds fail on GHA due to incompatible NSIS version. by @scrblue in https://github.com/vircadia/vircadia/pull/1560
* Mirror NSIS fix for PR builds to master builds on GHA. by @scrblue in https://github.com/vircadia/vircadia/pull/1562
* Fix static function warning in SocketType.h. by @JulianGro in https://github.com/vircadia/vircadia/pull/1556
* Fix MultiHash issues added in PR #1468. by @daleglass in https://github.com/vircadia/vircadia/pull/1567
* Bump follow-redirects from 1.12.1 to 1.14.7 in /scripts/system/inventory by @dependabot in https://github.com/vircadia/vircadia/pull/1571
* Bump shelljs from 0.8.4 to 0.8.5 in /scripts/system/inventory by @dependabot in https://github.com/vircadia/vircadia/pull/1568
* Housekeeping: Explicitly encode QStrings to utf8. by @daleglass in https://github.com/vircadia/vircadia/pull/1485
* Fixed some Linux distros being deemed unconditionally too old to use Qt. by @namark in https://github.com/vircadia/vircadia/pull/1572
* Remove deprecated usage of setUserData. by @daleglass in https://github.com/vircadia/vircadia/pull/1502
* Documentation format revisions. by @digisomni in https://github.com/vircadia/vircadia/pull/1505
* Replace call to devicePixelRatio() with devicePixelRatioF(). by @akamicah in https://github.com/vircadia/vircadia/pull/1575
* Update Unity Avatar Exporter with fixed cross-platform support. by @akamicah in https://github.com/vircadia/vircadia/pull/1579
* Add option to render green boxes for missing models. by @ctrlaltdavid in https://github.com/vircadia/vircadia/pull/1574
* Make build system more robust and add IPFS gateway support. by @namark in https://github.com/vircadia/vircadia/pull/1573
* Improve Metaverse sign-up UX. by @namark in https://github.com/vircadia/vircadia/pull/1580
* Fix sdl2 linking errors when built against new Wayland. by @namark in https://github.com/vircadia/vircadia/pull/1576
* Update image branding from High Fidelity to Vircadia. by @akamicah in https://github.com/vircadia/vircadia/pull/1588
* Safer linux distro version checks in Qt installation script. by @namark in https://github.com/vircadia/vircadia/pull/1587
* Fix dedicated IPFS gateway rejecting download requests. by @namark in https://github.com/vircadia/vircadia/pull/1589
* Add UI for setting metaverse server URL. by @namark in https://github.com/vircadia/vircadia/pull/1586
* UI for setting metaverse server on login by @mirrorwolf in https://github.com/vircadia/vircadia/pull/1174
* Remove unnecessary loop sending octree packets to a known node. by @odysseus654 in https://github.com/vircadia/vircadia/pull/1353
* Update API documentation for Window.prompt(). by @SilverfishVR in https://github.com/vircadia/vircadia/pull/1597
* Add Arch Linux build guide. by @rycadia in https://github.com/vircadia/vircadia/pull/1592
* Replace deprecated toSet() and toVector(). by @daleglass in https://github.com/vircadia/vircadia/pull/1503
* Disabled "Visit in VR" button in Domain server web panel. by @namark in https://github.com/vircadia/vircadia/pull/1595
* Bump url-parse from 1.5.3 to 1.5.7 in /scripts/system/inventory by @dependabot in https://github.com/vircadia/vircadia/pull/1604
* Bump ajv from 6.12.0 to 6.12.6 in /scripts/system/inventory by @dependabot in https://github.com/vircadia/vircadia/pull/1598
* Bump follow-redirects from 1.14.7 to 1.14.8 in /scripts/system/inventory by @dependabot in https://github.com/vircadia/vircadia/pull/1600
* Enabled vcpkg bootstrapping in PR and master builds. by @namark in https://github.com/vircadia/vircadia/pull/1606
* Fixed python prebuild script getting stuck trying to lock a file without permission. by @namark in https://github.com/vircadia/vircadia/pull/1602
* Domain server first time wizard improvements and fixes. by @namark in https://github.com/vircadia/vircadia/pull/1603
* Remove snaps in goto & nearby teleport references by @digisomni in https://github.com/vircadia/vircadia/pull/1298
* Bump url-parse from 1.5.7 to 1.5.10 in /scripts/system/inventory by @dependabot in https://github.com/vircadia/vircadia/pull/1614
* Added hash checks for downloaded items in python build scripts. by @namark in https://github.com/vircadia/vircadia/pull/1593

### New Contributors
* @scrblue made their first contribution in https://github.com/vircadia/vircadia/pull/1560
* @akamicah made their first contribution in https://github.com/vircadia/vircadia/pull/1575
* @mirrorwolf made their first contribution in https://github.com/vircadia/vircadia/pull/1174
* @rycadia made their first contribution in https://github.com/vircadia/vircadia/pull/1592

**Full Changelog**: https://github.com/vircadia/vircadia/compare/2022.1.0...2022.1.1

## 2022.1.0 (26/11/2021)

#### Enhancements

- [**packet version change**]\[**domain-server**] Enable WebRTC connections to be made to the Domain, i.e., add Web client support. [#1469](https://github.com/vircadia/vircadia/pull/1469)
-  Create app: Script indicator toggles for both entity client & server scripts. [#1444](https://github.com/vircadia/vircadia/pull/1444)
- [**linux**] Require OpenSSL 1.1.0 during CMake. [#1436](https://github.com/vircadia/vircadia/pull/1436)
-  Changed preset framerates; Add "low power" preset. [#1422](https://github.com/vircadia/vircadia/pull/1422)
-  Add antialiasing setting. [#1427](https://github.com/vircadia/vircadia/pull/1427)
- [**web sdk**] Update WebRTC for Linux. [#1406](https://github.com/vircadia/vircadia/pull/1406)
- [**domain-server**] Overhaul the Domain server's onboarding wizard. [#1344](https://github.com/vircadia/vircadia/pull/1344)
- [**housekeeping**] Update use of Q_DISABLE_COPY. [#1352](https://github.com/vircadia/vircadia/pull/1352)
- [**linux**] Add support for aarch64 (ARM) Linux builds on GitHub Actions. [#1346](https://github.com/vircadia/vircadia/pull/1346)
-  Improve use of "#include <QtCore/QSharedPointer>" in codebase. [#1336](https://github.com/vircadia/vircadia/pull/1336)

#### Bug Fixes

- [**macos**] Fix crashpad on macOS. [#1407](https://github.com/vircadia/vircadia/pull/1407)
-  Fix for _meshStates.empty() assertion. [#1465](https://github.com/vircadia/vircadia/pull/1465)
-  Fix automatic texture memory bug. [#1475](https://github.com/vircadia/vircadia/pull/1475)
- [**domain-server**] Fixed empty POST request to settings.json crashing the Domain server. [#1438](https://github.com/vircadia/vircadia/pull/1438)
- [**domain-server**] Fix mime type for serving .htm and .html files with the embedded webserver. [#1435](https://github.com/vircadia/vircadia/pull/1435)
- [**renderer**]\[**macos**] Fix automatic texture memory on macOS, Android, OpenGL ES, and Intel graphics. [#1398](https://github.com/vircadia/vircadia/pull/1398)
-  Fix GHA on MacOS. [#1386](https://github.com/vircadia/vircadia/pull/1386)
- [**docs**]\[**housekeeping**] Update API documentation for "created" properties. [#1360](https://github.com/vircadia/vircadia/pull/1360)
- [**audio-mixer**] Fix crash due to audio packet loss with PCM and zlib codecs. [#1366](https://github.com/vircadia/vircadia/pull/1366)
-  Get "make-deb-server" working again with Qt changes to Vircadia builder. [#1354](https://github.com/vircadia/vircadia/pull/1354)

#### Docs

- [**docs**] Update MacOS build guide. [#1414](https://github.com/vircadia/vircadia/pull/1414)

#### In Development

- [**domain-server**] Fix SSL WebSocket Domain server crash. [#1467](https://github.com/vircadia/vircadia/pull/1467)
- [**web sdk**] WebRTC revisions and updates including the addition of secure connections. [#1429](https://github.com/vircadia/vircadia/pull/1429)
- [**housekeeping**]\[**web sdk**] Networking code tidying and dead code removal. [#1415](https://github.com/vircadia/vircadia/pull/1415)
- [**web sdk**] Update webapp branch with the latest master. [#1383](https://github.com/vircadia/vircadia/pull/1383)
- [**packet version change**] Enable assignment client protocol communications over WebRTC. [#1333](https://github.com/vircadia/vircadia/pull/1333)

