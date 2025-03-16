import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter() // Vaihdettu adapter-auto -> adapter-vercel
	}
};

export default config;
