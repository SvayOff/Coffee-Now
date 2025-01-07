// vite.config.js
import { ViteImageOptimizer } from "file:///F:/Web/Coffee-Now/node_modules/vite-plugin-image-optimizer/dist/index.mjs";
import { defineConfig } from "file:///F:/Web/Coffee-Now/node_modules/vite/dist/node/index.js";
import path from "path";
import terser from "file:///F:/Web/Coffee-Now/node_modules/@rollup/plugin-terser/dist/es/index.js";
import { createHtmlPlugin } from "file:///F:/Web/Coffee-Now/node_modules/vite-plugin-html/dist/index.mjs";
import imagemin from "file:///F:/Web/Coffee-Now/node_modules/imagemin/index.js";
import imageminWebp from "file:///F:/Web/Coffee-Now/node_modules/imagemin-webp/index.js";
import glob from "file:///F:/Web/Coffee-Now/node_modules/fast-glob/out/index.js";
import { fileURLToPath } from "url";
var __vite_injected_original_dirname = "F:\\Web\\Coffee-Now";
var __vite_injected_original_import_meta_url = "file:///F:/Web/Coffee-Now/vite.config.js";
var rootPath = "/";
var vite_config_default = defineConfig(() => {
  return {
    base: `${rootPath}`,
    css: {
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ["legacy-js-api"]
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
          glob.sync(["./*.html", "./pages/**/*.html"]).map((file) => [
            path.relative(__vite_injected_original_dirname, file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
          ])
        )
      }
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
              name: "preset-default",
              params: {
                overrides: {
                  cleanupNumericValues: false,
                  removeViewBox: false,
                  cleanupIDs: {
                    minify: false,
                    remove: false
                  }
                },
                convertPathData: false
              }
            },
            {
              name: "addAttributesToSVGElement",
              params: {
                attributes: [{ xmlns: "http://www.w3.org/2000/svg" }]
              }
            },
            "sortAttrs",
            "removeDoctype",
            "removeXMLProcInst",
            "minifyStyles",
            "sortAttrs",
            "sortDefsChildren"
          ]
        },
        png: {
          quality: 70
        },
        jpeg: {
          quality: 70
        },
        jpg: {
          quality: 70
        },
        tiff: {
          quality: 70
        },
        avif: {
          lossless: true
        },
        cache: false,
        cacheLocation: void 0
      }),
      {
        ...imagemin(["./src/img/**/*.{jpg,png,jpeg}"], {
          destination: "./src/img/webp/",
          plugins: [
            imageminWebp({ quality: 70 })
          ]
        }),
        apply: "serve"
      }
    ]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxXZWJcXFxcQ29mZmVlLU5vd1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcV2ViXFxcXENvZmZlZS1Ob3dcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L1dlYi9Db2ZmZWUtTm93L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgVml0ZUltYWdlT3B0aW1pemVyIH0gZnJvbSAndml0ZS1wbHVnaW4taW1hZ2Utb3B0aW1pemVyJztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgdGVyc2VyIGZyb20gJ0Byb2xsdXAvcGx1Z2luLXRlcnNlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuaW1wb3J0IGltYWdlbWluIGZyb20gJ2ltYWdlbWluJztcclxuaW1wb3J0IGltYWdlbWluV2VicCBmcm9tICdpbWFnZW1pbi13ZWJwJztcclxuaW1wb3J0IGdsb2IgZnJvbSAnZmFzdC1nbG9iJztcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ3VybCc7XHJcblxyXG5jb25zdCByb290UGF0aCA9ICcvJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoKSA9PiB7XHJcblx0cmV0dXJuIHtcclxuXHRcdGJhc2U6IGAke3Jvb3RQYXRofWAsXHJcblx0XHRjc3M6IHtcclxuXHRcdFx0cHJlcHJvY2Vzc29yT3B0aW9uczoge1xyXG5cdFx0XHRcdHNjc3M6IHtcclxuXHRcdFx0XHRcdHNpbGVuY2VEZXByZWNhdGlvbnM6IFsnbGVnYWN5LWpzLWFwaSddLFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdGJ1aWxkOiB7XHJcblx0XHRcdC8vIG91dERpcjogXCJidWlsZFwiLFxyXG5cdFx0XHQvLyByb2xsdXBPcHRpb25zOiB7XHJcblx0XHRcdC8vIFx0b3V0cHV0OiBbXHJcblx0XHRcdC8vIFx0XHR7XHJcblx0XHRcdC8vIFx0XHRcdGVudHJ5RmlsZU5hbWVzOiBcImpzL1tuYW1lXS5taW4uanNcIixcclxuXHRcdFx0Ly8gXHRcdFx0Y2h1bmtGaWxlTmFtZXM6ICdqcy9bbmFtZV0uanMnLFxyXG5cdFx0XHQvLyBcdFx0XHRzc2V0RmlsZU5hbWVzOiAnYXNzZXRzL1tuYW1lXS5bZXh0XScsXHJcblx0XHRcdC8vIFx0XHRcdGZvcm1hdDogXCJlc1wiLFxyXG5cdFx0XHQvLyBcdFx0XHRwbHVnaW5zOiBbdGVyc2VyKCldLFxyXG5cdFx0XHQvLyBcdFx0XHRhc3NldEZpbGVOYW1lczogKGFzc2V0SW5mbykgPT4ge1xyXG5cdFx0XHQvLyBcdFx0XHRcdGlmIChhc3NldEluZm8ubmFtZSAmJiBhc3NldEluZm8ubmFtZS5lbmRzV2l0aCgnLmNzcycpKSB7XHJcblx0XHRcdC8vIFx0XHRcdFx0XHRyZXR1cm4gJ2Nzcy9bbmFtZV0ubWluLmNzcyc7XHJcblx0XHRcdC8vIFx0XHRcdFx0fVxyXG5cdFx0XHQvLyBcdFx0XHRcdHJldHVybiAnYXNzZXRzL1tuYW1lXVtleHRuYW1lXSc7XHJcblx0XHRcdC8vIFx0XHRcdH0sXHJcblx0XHRcdC8vIFx0XHR9LFxyXG5cdFx0XHQvLyBcdF1cclxuXHRcdFx0Ly8gfSxcclxuXHRcdFx0Ly8gY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG5cdFx0XHQvLyBtaW5pZnk6ICd0ZXJzZXInXHJcblx0XHRcdHJvbGx1cE9wdGlvbnM6IHtcclxuXHRcdFx0XHRpbnB1dDogT2JqZWN0LmZyb21FbnRyaWVzKFxyXG5cdFx0XHRcdFx0Z2xvYi5zeW5jKFsnLi8qLmh0bWwnLCAnLi9wYWdlcy8qKi8qLmh0bWwnXSkubWFwKGZpbGUgPT4gW1xyXG5cdFx0XHRcdFx0XHRwYXRoLnJlbGF0aXZlKF9fZGlybmFtZSwgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIHBhdGguZXh0bmFtZShmaWxlKS5sZW5ndGgpKSxcclxuXHRcdFx0XHRcdFx0ZmlsZVVSTFRvUGF0aChuZXcgVVJMKGZpbGUsIGltcG9ydC5tZXRhLnVybCkpXHJcblx0XHRcdFx0XHRdKVxyXG5cdFx0XHRcdClcclxuXHRcdFx0fSxcclxuXHRcdH0sXHJcblx0XHRwbHVnaW5zOiBbXHJcblx0XHRcdC8vIGNyZWF0ZUh0bWxQbHVnaW4oe1xyXG5cdFx0XHQvLyBcdHBhZ2VzOiBbXHJcblx0XHRcdC8vIFx0XHR7XHJcblx0XHRcdC8vIFx0XHRcdGVudHJ5OiAnLi9zcmMvanMvbWFpbi50cycsXHJcblx0XHRcdC8vIFx0XHRcdGZpbGVuYW1lOiAnaW5kZXguaHRtbCcsXHJcblx0XHRcdC8vIFx0XHRcdHRlbXBsYXRlOiAnaW5kZXguaHRtbCcsXHJcblx0XHRcdC8vIFx0XHR9LFxyXG5cdFx0XHQvLyBcdFx0Lyoge1xyXG5cdFx0XHQvLyBcdFx0XHRlbnRyeTogJy4vc3JjL2pzL3NldHRpbmdzLnRzJyxcclxuXHRcdFx0Ly8gXHRcdFx0ZmlsZW5hbWU6ICdzZXR0aW5ncy5odG1sJyxcclxuXHRcdFx0Ly8gXHRcdFx0dGVtcGxhdGU6ICdzZXR0aW5ncy5odG1sJyxcclxuXHRcdFx0Ly8gXHRcdH0gKi9cclxuXHRcdFx0Ly8gXHRdXHJcblx0XHRcdC8vIH0pLFxyXG5cdFx0XHRWaXRlSW1hZ2VPcHRpbWl6ZXIoe1xyXG5cdFx0XHRcdHN2Zzoge1xyXG5cdFx0XHRcdFx0bXVsdGlwYXNzOiB0cnVlLFxyXG5cdFx0XHRcdFx0cGx1Z2luczogW1xyXG5cdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0bmFtZTogJ3ByZXNldC1kZWZhdWx0JyxcclxuXHRcdFx0XHRcdFx0XHRwYXJhbXM6IHtcclxuXHRcdFx0XHRcdFx0XHRcdG92ZXJyaWRlczoge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGVhbnVwTnVtZXJpY1ZhbHVlczogZmFsc2UsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHJlbW92ZVZpZXdCb3g6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjbGVhbnVwSURzOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bWluaWZ5OiBmYWxzZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZW1vdmU6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHJcblx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0UGF0aERhdGE6IGZhbHNlLFxyXG5cdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiAnYWRkQXR0cmlidXRlc1RvU1ZHRWxlbWVudCcsXHJcblx0XHRcdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzOiBbeyB4bWxuczogJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB9XSxcclxuXHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHQnc29ydEF0dHJzJyxcclxuXHRcdFx0XHRcdFx0J3JlbW92ZURvY3R5cGUnLFxyXG5cdFx0XHRcdFx0XHQncmVtb3ZlWE1MUHJvY0luc3QnLFxyXG5cdFx0XHRcdFx0XHQnbWluaWZ5U3R5bGVzJyxcclxuXHRcdFx0XHRcdFx0J3NvcnRBdHRycycsXHJcblx0XHRcdFx0XHRcdCdzb3J0RGVmc0NoaWxkcmVuJyxcclxuXHRcdFx0XHRcdF0sXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRwbmc6IHtcclxuXHRcdFx0XHRcdHF1YWxpdHk6IDcwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0anBlZzoge1xyXG5cdFx0XHRcdFx0cXVhbGl0eTogNzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRqcGc6IHtcclxuXHRcdFx0XHRcdHF1YWxpdHk6IDcwLFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0dGlmZjoge1xyXG5cdFx0XHRcdFx0cXVhbGl0eTogNzAsXHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRhdmlmOiB7XHJcblx0XHRcdFx0XHRsb3NzbGVzczogdHJ1ZSxcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdGNhY2hlOiBmYWxzZSxcclxuXHRcdFx0XHRjYWNoZUxvY2F0aW9uOiB1bmRlZmluZWQsXHJcblx0XHRcdH0pLFxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Li4uaW1hZ2VtaW4oWycuL3NyYy9pbWcvKiovKi57anBnLHBuZyxqcGVnfSddLCB7XHJcblx0XHRcdFx0XHRkZXN0aW5hdGlvbjogJy4vc3JjL2ltZy93ZWJwLycsXHJcblx0XHRcdFx0XHRwbHVnaW5zOiBbXHJcblx0XHRcdFx0XHRcdGltYWdlbWluV2VicCh7IHF1YWxpdHk6IDcwIH0pXHJcblx0XHRcdFx0XHRdXHJcblx0XHRcdFx0fSksXHJcblx0XHRcdFx0YXBwbHk6ICdzZXJ2ZScsXHJcblx0XHRcdH1cclxuXHRcdF1cclxuXHR9O1xyXG59KTsiXSwKICAibWFwcGluZ3MiOiAiO0FBQTJPLFNBQVMsMEJBQTBCO0FBQzlRLFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFlBQVk7QUFDbkIsU0FBUyx3QkFBd0I7QUFDakMsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sVUFBVTtBQUNqQixTQUFTLHFCQUFxQjtBQVI5QixJQUFNLG1DQUFtQztBQUFzRyxJQUFNLDJDQUEyQztBQVVoTSxJQUFNLFdBQVc7QUFFakIsSUFBTyxzQkFBUSxhQUFhLE1BQU07QUFDakMsU0FBTztBQUFBLElBQ04sTUFBTSxHQUFHLFFBQVE7QUFBQSxJQUNqQixLQUFLO0FBQUEsTUFDSixxQkFBcUI7QUFBQSxRQUNwQixNQUFNO0FBQUEsVUFDTCxxQkFBcUIsQ0FBQyxlQUFlO0FBQUEsUUFDdEM7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQXFCTixlQUFlO0FBQUEsUUFDZCxPQUFPLE9BQU87QUFBQSxVQUNiLEtBQUssS0FBSyxDQUFDLFlBQVksbUJBQW1CLENBQUMsRUFBRSxJQUFJLFVBQVE7QUFBQSxZQUN4RCxLQUFLLFNBQVMsa0NBQVcsS0FBSyxNQUFNLEdBQUcsS0FBSyxTQUFTLEtBQUssUUFBUSxJQUFJLEVBQUUsTUFBTSxDQUFDO0FBQUEsWUFDL0UsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsVUFDN0MsQ0FBQztBQUFBLFFBQ0Y7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0EsU0FBUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWVSLG1CQUFtQjtBQUFBLFFBQ2xCLEtBQUs7QUFBQSxVQUNKLFdBQVc7QUFBQSxVQUNYLFNBQVM7QUFBQSxZQUNSO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixRQUFRO0FBQUEsZ0JBQ1AsV0FBVztBQUFBLGtCQUNWLHNCQUFzQjtBQUFBLGtCQUN0QixlQUFlO0FBQUEsa0JBQ2YsWUFBWTtBQUFBLG9CQUNYLFFBQVE7QUFBQSxvQkFDUixRQUFRO0FBQUEsa0JBQ1Q7QUFBQSxnQkFDRDtBQUFBLGdCQUVBLGlCQUFpQjtBQUFBLGNBQ2xCO0FBQUEsWUFDRDtBQUFBLFlBQ0E7QUFBQSxjQUNDLE1BQU07QUFBQSxjQUNOLFFBQVE7QUFBQSxnQkFDUCxZQUFZLENBQUMsRUFBRSxPQUFPLDZCQUE2QixDQUFDO0FBQUEsY0FDckQ7QUFBQSxZQUNEO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxRQUNBLEtBQUs7QUFBQSxVQUNKLFNBQVM7QUFBQSxRQUNWO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDTCxTQUFTO0FBQUEsUUFDVjtBQUFBLFFBQ0EsS0FBSztBQUFBLFVBQ0osU0FBUztBQUFBLFFBQ1Y7QUFBQSxRQUNBLE1BQU07QUFBQSxVQUNMLFNBQVM7QUFBQSxRQUNWO0FBQUEsUUFDQSxNQUFNO0FBQUEsVUFDTCxVQUFVO0FBQUEsUUFDWDtBQUFBLFFBQ0EsT0FBTztBQUFBLFFBQ1AsZUFBZTtBQUFBLE1BQ2hCLENBQUM7QUFBQSxNQUNEO0FBQUEsUUFDQyxHQUFHLFNBQVMsQ0FBQywrQkFBK0IsR0FBRztBQUFBLFVBQzlDLGFBQWE7QUFBQSxVQUNiLFNBQVM7QUFBQSxZQUNSLGFBQWEsRUFBRSxTQUFTLEdBQUcsQ0FBQztBQUFBLFVBQzdCO0FBQUEsUUFDRCxDQUFDO0FBQUEsUUFDRCxPQUFPO0FBQUEsTUFDUjtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
