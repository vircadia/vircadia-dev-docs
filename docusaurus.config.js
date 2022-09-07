// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Vircadia Developer Docs',
    tagline: 'Vircadia Technical Documentation',
    url: 'https://docs.vircadia.dev',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'vircadia', // Usually your GitHub org/user name.
    projectName: 'vircadia-dev-docs', // Usually your repo name.

    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    routeBasePath: '/',
                    // Please change this to your repo.
                    editUrl: 'https://github.com/vircadia/vircadia-dev-docs/edit/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
        navbar: {
            title: 'Developer Docs',
            logo: {
                alt: 'Vircadia',
                src: 'img/vircadia-banner.png',
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Introduction',
                },
                {
                    href: 'https://github.com/vircadia/vircadia-dev-docs',
                    label: 'Git',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'More Docs',
                    items: [
                        {
                            label: 'API Docs',
                            to: 'https://apidocs.vircadia.dev/'
                        },
                        {
                            label: 'User Docs',
                            to: 'https://docs.vircadia.com/'
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Forum',
                            href: 'https://forum.vircadia.com/'
                        },
                        {
                            label: 'Discord',
                            href: 'https://discordapp.com/invite/Pvx2vke'
                        },
                        {
                            label: 'Matrix',
                            href: 'https://matrix.to/#/#vircadia:matrix.vircadia.org'
                        }
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Website',
                            to: 'https://vircadia.com/',
                        },
                        {
                            label: 'Git',
                            href: 'https://github.com/vircadia/',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} DigiSomni LLC. | Copyright © ${new Date().getFullYear()} Vircadia contributors.`,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;
