cross-zip-cli
=============

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]
![windows Build status][windows-build-status]
[![standard][standard-image]][standard-url]

[npm-image]: https://img.shields.io/npm/v/cross-zip-cli.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/cross-zip-cli
[travis-image]: https://img.shields.io/travis/jprichardson/cross-zip-cli.svg?style=flat-square
[travis-url]: https://travis-ci.org/jprichardson/cross-zip-cli
[windows-build-status]: https://img.shields.io/appveyor/ci/jprichardson/cross-zip-cli/master.svg?label=windows%20build
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: http://npm.im/standard

Zip/Unzip directories cross platform from the CLI. Great for npm scripts. Built on [cross-zip][cross-zip].

## Why?

This is really useful for zipping/unzipping in your npm scripts that should run on cross-platform.


## Install

```
npm install -g cross-zip-cli
```

## Usage

### cross-zip

```
cross-zip [options] inputDir [zipFile]

  Zips a directory.

Examples:

  cross-zip /tmp/data
  cross-zip /tmp/data /tmp/data-reports.zip

Options:

  --help This message that you're viewing.
  --version The version.
```

### cross-unzip

```

  cross-unzip [options] zipFile outputDir

    Unzips a file.

  Examples:

    cross-unzip /tmp/data-reports.zip /tmp/data

  Options:

    --help This message that you're viewing.
    --version The version.

```

## Related
- [cross-zip][cross-zip]: npm module this is built on.

## License

[MIT](LICENSE.md)


[cross-zip]: https://github.com/feross/cross-zip
