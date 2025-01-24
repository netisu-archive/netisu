import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import autoprefixer from "autoprefixer";
import postcssNested from "postcss-nested";
import { watch } from "vite-plugin-watch";


export default defineConfig({
    css: {
        modules: {
            generateScopedName: "[hash:base64:5]",
        },
        postcss: {
            plugins: [
                 autoprefixer(),
                 postcssNested(),
            ],
        },

    },
    plugins: [
        watch({
            pattern: "routes/*.php",
            command: "php artisan trail:generate",
        }),
        laravel({
            input: ["resources/js/app.ts"],
            ssr: "resources/js/ssr.ts",
            /*
            refresh: [
              "resources/routes/**",
              "app/Http/**",
              "public/assets/js/**",
              "public/assets/img/**",
              "routes/**",

            ],*/
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
});
