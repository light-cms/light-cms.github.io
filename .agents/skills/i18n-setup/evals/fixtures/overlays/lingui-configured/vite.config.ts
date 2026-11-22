import { linguiMacroSwcPlugin } from "@lingui/swc-plugin/options";
import { lingui } from "@lingui/vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [react({ plugins: [linguiMacroSwcPlugin()] }), lingui()],
});
