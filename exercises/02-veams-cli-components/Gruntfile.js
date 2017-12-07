/*
 * Generated on 2017-12-07
 * generator-veams v9.0.0-rc4
 * http://veams.org/
 *
 * Copyright (c) 2017
 * Licensed under the MIT license.
 */

'use strict';

/*
 * PERFORMANCE
 * 
 * 1. For performance reasons you should only matching one level down, if possible. 
 * 2. Try to keep your watch task clean. Do NOT watch everything (like icons).
 * 3. Add "spawn: false" to your watch task when you need to speed up your build.
 *
 */
const config = require('./veams-cli.json');

module.exports = function(grunt) {
	
	// load only used tasks and add fallbacks for those which cannot be find
	require('jit-grunt')(grunt, {
	});
	// measures the time each task takes
	require('time-grunt')(grunt);

	// Load grunt configurations automatically
	const configs = require('load-grunt-configs')(grunt, config);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	/*
	 *	SIMPLE TASKS
	 */

	// SASS Task
	grunt.registerTask('watchCSS', [
		'sassGlobber:dev',
		'sass:dev'
	]);

	/*
	 * ADVANCED TASKS
	 */
	grunt.registerTask('server', [
		'clean:dev',
		'browserify:dev',
		'concurrent:syncing',
		'watchCSS',
		'sass:docs',
		'chokidar'
	]);
	
	grunt.registerTask('build', [
		'clean:dev',
		'browserify:dist',
		'uglify',
		'concurrent:syncing', 
		'sassGlobber:dist',
		'sass:dev',
		'sass:docs',
		'combine_mq',
		'postcss:dist',
		'cssmin',
		'mangony:dist',
		'concurrent:hintAndDocs'
	]);

	grunt.registerTask('default', [
		'server'
	]);
	
	// alias serve by grunt convention
	grunt.registerTask('serve', [
		'server'
	]);
	
	grunt.registerTask('dist', [
		'clean',
		'build',
		'copy:dist'
	]);
	
};
