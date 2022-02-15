import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import styleImport, { VantResolve } from "vite-plugin-style-import";
import { viteMockServe } from "vite-plugin-mock";
import { loadEnv } from "vite";

export default ({ command, mode }) => {
  return defineConfig({
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        comps: resolve(__dirname, "src/components"),
        apis: resolve(__dirname, "src/apis"),
        views: resolve(__dirname, "src/views"),
        utils: resolve(__dirname, "src/utils"),
        routes: resolve(__dirname, "src/routes"),
        styles: resolve(__dirname, "src/styles"),
      },
    },

    plugins: [
      vue(),
      vueJsx(),
      styleImport({
        resolves: [VantResolve()],
      }),
      viteMockServe({
        mockPath: "mock", // ↓解析根目录下的mock文件夹
        supportTs: false, // 打开后，可以读取 ts 文件模块。 请注意，打开后将无法监视.js 文件。
      }),
    ],
    server: {
      host: "0.0.0.0", // 解决  Network: use --host to expose
      // port: 4000, //启动端口
      open: true,
      // proxy: {
      //   "^/api": {
      //     target: "https://baidu.com",
      //     changeOrigin: true,
      //     ws: true,
      //     rewrite: pathStr => pathStr.replace(/^\/api/, ""),
      //   },
      // },
      // cors: true,
    },

    /**
     * 在生产中服务时的基本公共路径。
     * @default '/'
     */
    base: "./",
    build: {
      outDir: loadEnv(mode, process.cwd()).VITE_APP_OUT_DIR,
      assetsDir:"static",
      // rollupOptions: {
      //   output: {
      //     chunkFileNames: 'static/js1/[name]-[hash].js',
      //     entryFileNames: 'static/js2/[name]-[hash].js',
      //     assetFileNames: 'static/[ext]/[name]-[hash].[ext]'
      //   },
      // },
      // brotliSize: false, // 不统计
      // target: 'esnext', 
      // minify: 'esbuild' // 混淆器，terser构建后文件体积更小
      // terserOptions: {
      //   compress: {
      //     drop_console: true,
      //   },
      // },
    },
  });
};
