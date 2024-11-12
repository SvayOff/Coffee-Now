import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { defineConfig } from 'vite';
import path from 'path';
import terser from '@rollup/plugin-terser';
import { createHtmlPlugin } from 'vite-plugin-html';
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import glob from 'fast-glob';
import { fileURLToPath } from 'url';

const rootPath = '/';

export default defineConfig(() => {
	return {
		base: `${rootPath}`,
		css: {
			preprocessorOptions: {
				scss: {
					silenceDeprecations: ['legacy-js-api'],
				}
			}
		},
		build: {
			// outDir: "build",
			// rollupOptions: {
			// 	output: [
			// 		{
			// 			entryFileNames: "js/[name].min.js",
			// 			chunkFileNames: 'js/[name].js',
			// 			ssetFileNames: 'assets/[name].[ext]',
			// 			format: "es",
			// 			plugins: [terser()],
			// 			assetFileNames: (assetInfo) => {
			// 				if (assetInfo.name && assetInfo.name.endsWith('.css')) {
			// 					return 'css/[name].min.css';
			// 				}
			// 				return 'assets/[name][extname]';
			// 			},
			// 		},
			// 	]
			// },
			// cssCodeSplit: true,
			// minify: 'terser'
			rollupOptions: {
				input: Object.fromEntries(
					glob.sync(['./*.html', './pages/**/*.html']).map(file => [
						path.relative(__dirname, file.slice(0, file.length - path.extname(file).length)),
						fileURLToPath(new URL(file, import.meta.url))
					])
				)
			},
		},
		plugins: [
			// createHtmlPlugin({
			// 	pages: [
			// 		{
			// 			entry: './src/js/main.ts',
			// 			filename: 'index.html',
			// 			template: 'index.html',
			// 		},
			// 		/* {
			// 			entry: './src/js/settings.ts',
			// 			filename: 'settings.html',
			// 			template: 'settings.html',
			// 		} */
			// 	]
			// }),
			ViteImageOptimizer({
				svg: {
					multipass: true,
					plugins: [
						{
							name: 'preset-default',
							params: {
								overrides: {
									cleanupNumericValues: false,
									removeViewBox: false,
								},
								cleanupIDs: {
									minify: false,
									remove: false,
								},
								convertPathData: false,
							},
						},
						{
							name: 'addAttributesToSVGElement',
							params: {
								attributes: [{ xmlns: 'http://www.w3.org/2000/svg' }],
							},
						},
						'sortAttrs',
						'removeDoctype',
						'removeXMLProcInst',
						'minifyStyles',
						'sortAttrs',
						'sortDefsChildren',
					],
				},
				png: {
					quality: 70,
				},
				jpeg: {
					quality: 70,
				},
				jpg: {
					quality: 70,
				},
				tiff: {
					quality: 70,
				},
				avif: {
					lossless: true,
				},
				cache: false,
				cacheLocation: undefined,
			}),
			{
				...imagemin(['./src/img/**/*.{jpg,png,jpeg}'], {
					destination: './src/img/webp/',
					plugins: [
						imageminWebp({ quality: 70 })
					]
				}),
				apply: 'serve',
			}
		]
	};
});