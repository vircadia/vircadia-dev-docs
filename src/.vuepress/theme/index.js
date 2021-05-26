//
//  index.js
//
//  Created by Kalila L. on May 25th, 2021.
//  Copyright 2021 Vircadia contributors.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

const { path } = require('@vuepress/utils')

module.exports = {
    name: 'vuepress-theme-local',
    extends: '@vuepress/theme-default',
    layouts: {
        404: path.resolve(__dirname, 'layouts/404.vue'),
    }
}
