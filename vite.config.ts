import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";

const Config = defineConfig({
	plugins: [
		solidPlugin(),
	]
});

export default Config;