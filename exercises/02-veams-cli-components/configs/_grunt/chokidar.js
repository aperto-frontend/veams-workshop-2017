module.exports = {
	ajax: {
		files: 'server/ajax/**/*.{json,html}',
		tasks: 'sync:ajax'
	},
	assets: {
		files: [
			'<%= paths.src %>/assets/**/*'
			],
		tasks: 'sync:assets'
	},
	scss: {
		files: [
			'<%= paths.src %>/app.tmp.scss',
			'<%= paths.src %>/core/styles/**/*.scss',
			'<%= paths.src %>/shared/styles/**/*.scss',
			'<%= paths.src %>/shared/components/**/styles/**/*.scss',
			'<%= paths.src %>/shared/utilities/**/styles/**/*.scss',
			'<%= paths.src %>/shared/layouts/**/styles/**/*.scss'
		],
		tasks: [
			'sass:dev'
		]
	}
};