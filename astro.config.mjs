import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import prefetch from '@astrojs/prefetch';
// https://astro.build/config
export default defineConfig({
	// Enable Preact to support Preact JSX components.
	integrations: [preact(),prefetch()],
});
