// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
    compatibilityDate: "2024-11-01",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    vite: {
        plugins: [tailwindcss()],
    },
    app: {
        head: {
            htmlAttrs: { lang: "en" },
            title: "Template Nuxt 3 Project",
        },
    },
    modules: [
        "@nuxt/content",
        "@nuxt/eslint",
        "@nuxt/image",
        "@nuxt/test-utils",
    ],
})
