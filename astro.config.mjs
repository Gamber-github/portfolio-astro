import image from '@astrojs/image';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), mdx(), image()],
	i18n: {
		defaultLocale: 'pl',
		locales: ['en', 'pl'],
	},
	routing: {
		prefixDefaultLocale: true,
	},
});
