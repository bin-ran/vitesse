import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import UnoCSS from 'unocss/vite'
import VueRouter from 'vue-router/vite'
import { defineConfig } from 'vite'
import vueDevTools from 'vite-plugin-vue-devtools'
import Layouts from 'vite-plugin-vue-layouts'

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [
      VueRouter({
        dts: 'src/typed-router.d.ts',
      }),
      vue(),
      Layouts(),
      vueDevTools(),
      UnoCSS(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      rolldownOptions: {
        output: {
          codeSplitting: {
            groups: [
              {
                name: 'vue',
                test: /node_modules\/vue/,
              },
              {
                name: 'pinia',
                test: /node_modules\/pinia/,
              },
              {
                name: 'count',
                test: (id) => {
                  if (
                    id.includes(
                      new URL(
                        './src/stores/count.ts',
                        import.meta.url,
                      ).pathname.slice(1),
                    )
                  ) {
                    console.log(id)
                    return true
                  }
                  return false
                },
              },
            ],
          },
        },
      },
    },
  }
})
