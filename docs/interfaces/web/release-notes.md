# Release Notes

## v2023.2.1 (11/02/2023)

### What's Changed

- Add initial LOD functionality. by @digisomni in https://github.com/vircadia/vircadia-web/pull/185
- Update to latest Web SDK and remove old vircadia-web-sdk.d.ts file. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web/pull/194
- Performance fixes on reconnect. by @digisomni in https://github.com/vircadia/vircadia-web/pull/196
- Fix domain server not being told the metaverse server URL. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web/pull/197
- Fix metadata parsing in the case of parent TransformNodes. by @digisomni in https://github.com/vircadia/vircadia-web/pull/195
- Add desktop wrapper. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/192
- Rename NametagEntity to LabelEntity for clarity. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/200

**Full Changelog**: https://github.com/vircadia/vircadia-web/compare/v2023.2.0...v2023.2.1

## v2023.2.0 (10/09/2023)

### What's Changed

- Bring `UI` branch up to speed with `master`. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/146
- Bring `engine` branch up to speed with `master`. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/147
- Fix routing after wizard. by @digisomni in https://github.com/vircadia/vircadia-web/pull/145
- Add configurable Open Graph tags. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/149
- Implement functionality for mute/volume controls in the "People" menu. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/150
- Redesign the list items in the People menu. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/151
- Rotate the player's avatar to face forwards when in FPV. Add a state to keep track of the player's interactions. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/152
- Scroll just the avatar model list instead of the whole Avatar menu. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/153
- Bring `engine` branch up to speed with `master`. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/154
- Add new `sitting_couch` animation. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/155
- Bring `UI` branch up to speed with `master`. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/158
- Redesign the volume adjustment icon in the People menu. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/159
- Disable WebGPU on MacOS. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web/pull/169
- Disable WebGPU totally for now. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web/pull/171
- Fix walking forever when clock on an app window when walking key is being pressed. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web/pull/173
- Ignore Visual Studio IDE files. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web/pull/174
- Update dependencies. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/175
- Tidy and document the codebase. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/179
- Add igloo types. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/182
- Fix avatar attachment positions. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/181
- Fix silent audio input/output. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/183
- Only sync bookmarks & control settings between tabs. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/184
- Add command to use local copy of Web SDK during development. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web/pull/178
- Add baseUrl config by env. by @digisomni in https://github.com/vircadia/vircadia-web/pull/187
- Bring the `fix/audio` branch up to date with `master`. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/188
- Fix the microphone level meter. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/189
- Add loading screen hint messages. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/191

**Full Changelog**: https://github.com/vircadia/vircadia-web/compare/v2023.1.0...v2023.2.0

## v2023.1.0 (09/03/2023)

### What's Changed

- UI tweaks and solve ImageEntity bug. by @Madders in https://github.com/vircadia/vircadia-web/pull/101
- Allow the URL auto-update frequency to be configured. by @Madders in https://github.com/vircadia/vircadia-web/pull/103
- Base avatar collisions on the dimensions of the avatar model, add flying mode. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/109
- Improve the appearance of nametags. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/112
- Bring `UI` branch up to speed with `master`. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/123
- Improve environment variable handling. by @digisomni in https://github.com/vircadia/vircadia-web/pull/124
- Trim old messages from the chat, instead of new messages. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/129
- Bring `UI` branch up to speed with `master`. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/132
- Account for a difference in the hip positions of the avatar and animation model. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/130
- Use metaverse OAuth for authentication on the domain. by @ctrlaltdavid in https://github.com/vircadia/vircadia-web/pull/106
- Add mouse settings to the Controls menu. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/134
- Add GHA PR deploy. by @digisomni in https://github.com/vircadia/vircadia-web/pull/138
- Add sitting, clapping, and salute emote actions. by @Gigabyte5671 in https://github.com/vircadia/vircadia-web/pull/137

**Full Changelog**: https://github.com/vircadia/vircadia-web/compare/v2022.1.0...v2023.1.0

## v2022.1.0 (03/01/2023)

### What's Changed

- Various UX improvements. [#28](https://github.com/vircadia/vircadia-web/pull/28)
- Update overlay manager. [#26](https://github.com/vircadia/vircadia-web/pull/26)
- Add modules for Audio, Accounts, and Metaverse; fix dialogs and components. [#22](https://github.com/vircadia/vircadia-web/pull/22)
- Display the SDK library's verbose version number in the "about" dialog. [#38](https://github.com/vircadia/vircadia-web/pull/38)
- Update the Typescript definition of the SDK API. [#37](https://github.com/vircadia/vircadia-web/pull/37)
- Explore App functionality added; Add data connection to the Metaverse API. [#33](https://github.com/vircadia/vircadia-web/pull/33)
- Add Vircadia Web SDK to app. [#23](https://github.com/vircadia/vircadia-web/pull/23)
