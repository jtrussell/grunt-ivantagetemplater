/**
 *  ------------------------------------------------------------------------
 *  @project: grunt-ivantagetemplater
 *  @date: 2013-08-08
 *  @author: Justin Russell
 *
 *  Copyright (c) 2013, iVantage Health Analytics, Inc.
 *  ------------------------------------------------------------------------
*/

"use strict";

module.exports = function(grunt) {
	var mustache = require("mustache")
		, path = require("path");

  grunt.registerMultiTask("ivantagetemplater", "", function() {
		this.requiresConfig([this.name, this.target, "data"]);
		this.requiresConfig([this.name, this.target, "templateRoot"]);
		this.requiresConfig([this.name, this.target, "templates"]);
		this.requiresConfig([this.name, this.target, "destRoot"]);

    var options = this.options({
				templateSuffix: ".mustache"
			})
			, data = this.data.data
			, destRoot = path.normalize(this.data.destRoot)
			, templateRoot = path.normalize(this.data.templateRoot)
			, templateSuffix = options.templateSuffix
			, templates = grunt.file.expand({
					"nonull": true
				}, this.data.templates);

		templates.forEach(function(file) {
			file = path.normalize(file);

			var raw = grunt.file.read(file)
				, processed = mustache.render(raw, data)
				, outpath = path.normalize(path.normalize(file)
					.replace(templateRoot, destRoot)
					.replace(templateSuffix, ""));

			grunt.log.writeln("File " + outpath + " created.");
			grunt.file.write(outpath, processed);
		});
  });
};
