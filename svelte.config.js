
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';
import { viteCommonjs } from "@originjs/vite-plugin-commonjs";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		sourceMap: true
	}),


	kit: {
		adapter: adapter(),

		vite: {
			ssr: {
				noExternal: ['@popperjs/core'],
				
			},
			plugins: [
				viteCommonjs({
					include: [
						"mime-types"
					]
				})
			],
			server: {
				strictPort: false ,

			}
			
		},

		methodOverride: {
			allowed: ['PATCH', 'DELETE', 'PUT']
		}
	}
};

export default config;
