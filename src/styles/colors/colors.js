export default {
	primary: {
		light: "",
		0: "#9EB0B0",
		dark: "#869898"
	},
	gradients: {
		dark: {
			fallbackBackground: 'rgb(14,32,49)',
			background:
				'linear-gradient(130deg, rgba(14,32,49,1) 0%, rgba(5,31,43,1) 35%)',
		},
		lightUp: {
			fallbackBackground: 'rgb(255,255,255)',
			background:
				'linear-gradient(180deg,rgba(255,255,255,1) 0%,rgb(255, 255, 255) 50%,rgba(245,245,245,1) 100%);',
		},
		lightDown: {
			fallbackBackground: 'rgb(255,255,255)',
			background:
				'linear-gradient(180deg,rgba(245,245,245,1) 0%,rgb(255, 255, 255) 50%, rgba(255,255,255,1) 100%);',
		},
	},
};