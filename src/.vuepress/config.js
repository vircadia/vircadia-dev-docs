//
//  config.js
//
//  Created by Kalila L. on May 25th, 2021.
//  Copyright 2021 Vircadia contributors.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//

const { path } = require('@vuepress/utils')

const { productName } = require('../../package')
const { description } = require('../../package')
const { repository } = require('../../package')

module.exports = {
    /**
    * Ref：https://v1.vuepress.vuejs.org/config/#title
    */
    title: productName,
    /**
    * Ref：https://v1.vuepress.vuejs.org/config/#description
    */
    description: description,

    /**
    * Extra tags to be injected to the page HTML `<head>`
    *
    * ref：https://v1.vuepress.vuejs.org/config/#head
    */
    // head: [
    //     ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    //     ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    //     ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    // ],

    // All theme overrides should go in that folder.
    theme: path.resolve(__dirname, 'theme'),

    /**
    * Theme configuration, here is the default theme configuration for VuePress.
    *
    * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
    */
    themeConfig: {
        docsRepo: repository.url,
        docsBranch: 'master',
        docsDir: 'src',
        lastUpdated: true,
        lastUpdatedText: 'Last updated',
        editLink: true,
        editLinkPattern: ':repo/edit/:branch/:path',
        navbar: [
            {
                text: 'Scripting API Docs',
                link: 'https://apidocs.vircadia.dev'
            },
            {
                text: 'User Docs',
                link: 'https://docs.vircadia.com'
            },
            {
                text: 'Discord',
                link: 'https://discordapp.com/invite/Pvx2vke'
            }
        ],
        logo: '/icons/favicon-128x128.png'
    },

    /**
    * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
    */
    plugins: [
    ]
}
