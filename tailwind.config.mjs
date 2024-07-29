/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			animation: {
				marquee: "marquee 25s linear infinite",
				marqueeTwo: "marquee 15s linear infinite",
			  },
			  keyframes: {
				marquee: {
				  from: {
					transform: 'translateX(0)',
				  },
				  to: {
					transform: 'translateX(calc(-100% - 24rem))',
				  },
				},
			  },
		},
	},
	plugins: [],
}
