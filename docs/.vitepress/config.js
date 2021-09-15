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
						{ text: 'Getting started', link: '/introduction/getting-started' },
						{ text: 'Library guiding principles', link: '/introduction/guiding-principles' }
					]
				},
				{
					text: 'Contributing',
					children: [
						{ text: 'Guidelines', link: '/contributing/contributing-guidelines' },
						{ text: 'For developers', link: '/contributing/for-developers' }
					]
				},
				{
					text: 'Design Tokens'
				},
				{
					text: 'Components',
					children: [
						{ text: 'Button', link: '/components/button' },
						{ text: 'Radio', link: '/components/radio' }
					]
				}
			]
		}
	}
}
