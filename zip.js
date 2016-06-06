#!/usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
var fs = require('fs')
var path = require('path')
var pkg = require('./package')
var zip = require('cross-zip')

if (argv.help || (Object.keys(argv).length === 1 && argv._.length === 0)) {
  fs.createReadStream(path.join(__dirname, './zip-usage.txt')).pipe(process.stdout)
} else if (argv.version) {
  console.log(pkg.version)
} else {
  var inPath = argv._[0]
  var outPath = argv._[1]

  if (!outPath) outPath = inPath + '.zip'

  zip.zip(inPath, outPath, function (err) {
    if (!err) return
    process.exitCode = 1
    console.error(err.message)
  })
}
