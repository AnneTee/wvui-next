const path = require( 'path' );
const componentTemplate = require( './docs/templates/component' );

/** @type import("vue-docgen-cli").DocgenCLIConfig */
module.exports = {
	docsRepo: "annetee/wvui-next",
	docsBranch: "main",
	docsFolder: "docs",
	componentsRoot: "src/components",
	components: "*/[A-Z]*.vue",
	outDir: "./docs/components",
	getDestFile: ( componentPath, config ) => {
		return path
			.join( config.outDir, componentPath )
			.replace( /\/\w+\.vue$/, ".md" );
	},
	templates: {
		component: componentTemplate
	},
	// TODO: remove this link altogether
	editLinkLabel: ''
};
