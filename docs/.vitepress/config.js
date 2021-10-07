module.exports = {
	lang: 'en-US',
	title: 'Codex',
	description: 'Toolkit for building user interfaces within the Wikimedia Design System',

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
						{ text: 'Designing components', link: '/contributing/designing-components' },
						{ text: 'Contributing code', link: '/contributing/contributing-code' },
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
				},
				{
					text: 'ADRs',
					children: [
						{ text: 'Example', link: '/adrs/example' },
					]
				}
			]
		}
	}
}
