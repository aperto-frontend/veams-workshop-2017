module.exports = {
	spriteUrl: {
		src: ['<%= paths.src %>/shared/styles/icons/_sprites-icons-sprite.scss'],             // source files array (supports minimatch)
		dest: '<%= paths.src %>/shared/styles/icons/_sprites-icons-sprite.scss',               // destination directory or file
		replacements: [
			{
				from: '../../assets/img/',                                      // string replacement
				to: '../img/'
			}
		]
	},
	jsTemplates: {
		src: ['<%= paths.src %>/shared/scripts/templates.js'],             // source files array (supports minimatch)
		dest: '<%= paths.src %>/shared/scripts/templates.js',               // destination directory or file
		replacements: [
			{
				from: 'this[\"App\"]',                                      // string replacement
				to: 'window[\"App\"]'
			}
		]
	}
	
};