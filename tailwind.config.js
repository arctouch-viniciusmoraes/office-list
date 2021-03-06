module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
		boxShadow: {
			default: '0px 5px 5px 0px rgba(0, 0, 0, 0.15)',
			xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
			sm: '0 3px 3px 0 rgba(0, 0, 0, 0.1)',
		},
		spacing: {
			'72': '18rem',
			'84': '21rem',
		},
		maxHeight: {
			'0': '0',
			'1/4': '25%',
			'1/2': '50%',
			'3/4': '75%',
			'full': '100%',
			'form': '3000px',
		},
		inset: {
			auto: 'auto',
			'1/2': '50%',
			'n80': '-80px',
			'0': 0,
			'10': '10px',
			'20': '20px',
			'30': '30px',
		}
	},
  },
  variants: {},
  plugins: [],
}
