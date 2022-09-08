import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
	siteMetadata: {
		title: `PetGuardian`,
		siteUrl: `https://www.yourdomain.tld`,
	},
	// More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
	// If you use VSCode you can also use the GraphQL plugin
	// Learn more at: https://gatsby.dev/graphql-typegen
	graphqlTypegen: true,
	plugins: [
		"gatsby-plugin-sass",
		"gatsby-plugin-image",
		"gatsby-plugin-sitemap",
		{
			resolve: "gatsby-plugin-manifest",
			options: {
				icon: "src/images/icon.png",
			},
		},
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-plugin-portal`,
			options: {
				key: "overlays",
				id: "overlays",
			},
		},
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `petGuardian`,
				short_name: `petGuardian`,
				description: `Quotes form for petGuardian, an imaginary pet insurance company.`,
				lang: `en`,
				display: `standalone`,
				icon: "src/images/icon.png",
				icon_options: {
					purpose: `any maskable`,
				},
				start_url: `/`,
				background_color: `#202124`,
				theme_color: `#202124`,
				cache_busting_mode: "none",
			},
		},
		{
			resolve: "gatsby-plugin-offline",
			options: {
				workboxConfig: {
					globPatterns: ["*.html"],
				},
			},
		},
	],
};

export default config;
