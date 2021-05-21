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
