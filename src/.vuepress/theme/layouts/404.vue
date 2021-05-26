<!--
//
//  404.vue
//
//  Created by Kalila L. on May 25th, 2021.
//  Copyright 2021 Vircadia contributors.
//
//  Distributed under the Apache License, Version 2.0.
//  See the accompanying file LICENSE or http://www.apache.org/licenses/LICENSE-2.0.html
//
-->

<template>
    <div class="theme-container">
        <div class="theme-default-content">
            <h1>404</h1>

            <blockquote>{{ getMsg() }}</blockquote>

            <p>Were you trying to get to the user documentation? Take me <a @click="redirectToUserDocs">there</a>.</p>

            <RouterLink :to="homeLink">{{ homeText }}</RouterLink>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouteLocale } from '@vuepress/client'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables'
export default defineComponent({
    name: '404',
    setup() {
        const routeLocale = useRouteLocale()
        const themeLocale = useThemeLocaleData()
        const messages = themeLocale.value.notFound ?? ['Not Found']
        const getMsg = (): string =>
        messages[Math.floor(Math.random() * messages.length)]
        const homeLink = themeLocale.value.home ?? routeLocale.value
        const homeText = themeLocale.value.backToHome ?? 'Back to home'
        return {
            getMsg,
            homeLink,
            homeText,
        }
    },
    methods: {
        redirectToUserDocs: () => {
            window.location = "https://docs.vircadia.com" + window.location.pathname;
        }
    }
})
</script>
