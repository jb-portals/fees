import type { NextConfig } from "next";
export default {
	experimental: {
		optimizePackageImports: ["@chakra-ui/react"],
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	cacheComponents: true,
} satisfies NextConfig;
