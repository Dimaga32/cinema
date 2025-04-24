import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import path from "path"
// https://vite.dev/config/
export default defineConfig({
	root: "./",
	server: {
		port: 3000,
		open: true,
		proxy: {
			// Настройка прокси для API запросов
			"/api": {
				target: "http://localhost:5000", // Целевой сервер для проксирования
				changeOrigin: true, // Изменять origin заголовок на целевой сервер
				secure: false, // Отключить проверку SSL сертификата
			},
		},
	},
	preview: {
		host: true, // или "0.0.0.0"
		port: 3000,
	},
	build: {
		outDir: "build", // Директория, куда будет помещена собранная версия проекта
		sourcemap: true, // Генерация source maps для отладки
		rollupOptions: {
			// Настройки Rollup (бандлера, который использует Vite)
			output: {
				manualChunks: {
					// Ручное разделение кода на чанки (например, для оптимизации загрузки)
					react: ["react", "react-dom"],
					vendor: ["lodash", "axios"],
				},
			},
		},
	},
	resolve: {
		alias: {
			// Создание алиасов для путей, чтобы упростить импорты
			"@": path.resolve(__dirname, "src"), // Алиас для директории src
		},
	},

	// Настройки для оптимизации
	optimizeDeps: {
		include: ["react", "react-dom"], // Зависимости, которые будут предварительно оптимизированы
	},
	plugins: [react()],
})
