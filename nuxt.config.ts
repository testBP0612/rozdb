import tailwindcss from '@tailwindcss/vite';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ['@nuxt/eslint', '@nuxtjs/google-fonts', '@pinia/nuxt', 'nuxt-jsonld'],
	css: ['~/assets/css/main.css'],
	vite: {
		plugins: [tailwindcss()],
	},
	// nitro: {
	// 	plugins: ['@/server/index'],
	// },
	googleFonts: {
		families: {
			Inter: [300, 400, 500, 600, 700],
			Poppins: [500, 600, 700],
		},
		display: 'swap',
	},
});
