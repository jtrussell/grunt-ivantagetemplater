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

var grunt = require("grunt");

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.ivantagetemplater = {
  setUp: function(done) {
    done();
  },

  "basic": function(test) {
    test.expect(1);

    var actual = grunt.file.read(__dirname + "/tmp/foobar.html")
			, expected = grunt.file.read(__dirname + "/expected/foobar.html");

    test.equal(
			actual.trim(),
			expected.trim(),
			"Should be able to handle basic replacements");

    test.done();
  },

  "nest-key-vals": function(test) {
    test.expect(1);

    var actual = grunt.file.read(__dirname + "/tmp/whammy/pipes.json")
			, expected = grunt.file.read(__dirname + "/expected/whammy/pipes.json");

    test.equal(
			actual.trim(),
			expected.trim(),
			"Should be able to handle nested key/value pairs"
		);

    test.done();
  }
};
