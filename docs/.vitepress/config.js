module.exports = {
	lang: 'en-US',
	title: 'WVUI-next',
	description: 'Playground for Vue 3 + Vite component library experiments',

	themeConfig: {
		repo: 'annetee/wvui-next',
		docsDir: 'docs',
		lastUpdated: 'Last updated',
	
		sidebar: {
			'/': [
			 	{
					text: 'Introduction',
					children: [
						{ text: 'About', link: '/' },
						{ text: 'Getting started', link: '/introduction/getting-started' }
					]
				},
				{
					text: 'Contributing',
					children: [
						{ text: 'Guidelines', link: '/contributing/guidelines' },
						{ text: 'Contribution workflows', link: '/contributing/contribution-workflows' },
						{ text: 'Contributing code', link: '/contributing/contributing-code' },
						{ text: 'Developing', link: '/contributing/developing' }
					]
				},
				{
					text: 'Design Tokens',
					children: [
						{ text: 'Introduction', link: '/design-tokens/introduction' },
						{ text: 'Colors', link: '/design-tokens/colors' },
						{ text: 'Borders', link: '/design-tokens/borders' }
					]
				},
				{
					text: 'Components',
					children: [
						{ text: 'Button', link: '/components/button' },
						{ text: 'Radio', link: '/components/radio' },
						{ text: 'ToggleSwitch', link: '/components/toggle-switch' }
					]
				}
			]
		}
	}
}
