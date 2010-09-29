/*!
 * Fragile
 * Copyright(c) 2010 Kadir Pekel.
 * MIT Licensed
 */

var fragile = require('./fragile'),
  path = require('path'),
  fs = require('fs');

// simply handle a file
// TODO: improve input handling

fragile.run(require(path.join(process.cwd(), process.ARGV[2])));
