import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";
import tailwindcss from "@tailwindcss/vite";
import fs from 'fs'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueDevTools(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
    server: {
    host: '0.0.0.0',        // ← слушать все интерфейсы
    port: 5173,             // можно изменить, если нужно
    strictPort: true,
    // https: {
    //       key: fs.readFileSync('./ssl/private.key'),  // путь к ключу
    //       cert: fs.readFileSync('./ssl/cert.pem'),     // путь к сертификату
    //     },
    //proxy: {
         // '/api': {
          //  target: 'http://localhost:3001', // Адрес вашего сервера
          //  changeOrigin: true, // Меняет Origin заголовок на целевой сервер
           // rewrite: (path) => {
           //   console.log('Rewriting path:', path); // Логирование для отладки
           //   return path.replace(/^\/api/, ''); // Удаляет '/api' перед отправкой
         //   },
         //   secure: false, // Отключает проверку сертификата (на случай HTTPS)
        //  },
      //  },
   
  },
});
