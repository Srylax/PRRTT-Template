import { mergeConfig } from 'vite';
import baseConfig from '../../packages/config/vite';

export default mergeConfig(baseConfig, {
	server: {
		port: 8002
	},
	plugins: [
	]
});