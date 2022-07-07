
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';

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
