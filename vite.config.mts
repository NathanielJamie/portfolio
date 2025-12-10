import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react-swc';
import path from 'node:path';
import vike from 'vike/plugin';
import type { UserConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
/** @type {import('vite').UserConfig} */
const config: UserConfig = {
	build: {
		manifest: true,
		target: 'esnext',
		sourcemap: false,
		minify: 'esbuild',
		cssCodeSplit: true,
	},
	optimizeDeps: {
		exclude: ['node-stdlib-browser'],
	},
	ssr: {
		noExternal: ['buffer'],
	},
	assetsInclude: ['**/*.md', '**/*.mdx'],
	// @ts-ignore
	plugins: [vike(), react(), svgr(), tailwindcss()],
	css: {
		modules: {
			generateScopedName: '[hash:base64:48]',
		},
	},
	resolve: {
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json'],
		alias: {
			'@': path.resolve(__dirname, './src'),
		},
	},
};

export default config;
