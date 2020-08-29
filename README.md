# Bootstrap Icons workflow for Alfred

[![Latest Version](http://img.shields.io/github/release/ruedap/bootstrap-icons-workflow.svg?style=flat-square)](https://github.com/ruedap/bootstrap-icons-workflow/releases)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](http://ruedap.mit-license.org/2015)

You can incrementally search for [Bootstrap Icons](https://icons.getbootstrap.com/) and paste it to front most app.

## Installation

Download **[Bootstrap-Icons.alfredworkflow](https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases)** and import to [Alfred](http://www.alfredapp.com/) (requires Powerpack).

The current supported version is **Bootstrap Icons 1.0.0**. Previous versions are available [here](https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases).

### macOS Catalina refuses to run unsigned binaries by default

There are a few ways to allow such programs to run.  
See: https://github.com/ruedap/alfred-font-awesome-workflow/issues/119

## Usage

**Keyword** `bi`: Search through [Bootstrap Icons](https://icons.getbootstrap.com/).

- `Enter`: Paste class name (**for coding HTML/CSS**. e.g. `bi-arrow-right-circle
`)
- `Command + Enter`: Open in browser (e.g. <https://icons.getbootstrap.com/icons/arrow-right-circle/>)

## Options

**Disable pasting**: Turn off "Automatically paste to front most app" in Workflow's Preferences.

![Disable pasting](https://github.com/ruedap/alfred-font-awesome-workflow/raw/master/screenshots/option-disable-pasting.png)

## Development

```sh
$ npm i
$ npm t
$ npm run build
$ npm run open
```

## License

Released under the [MIT license](http://ruedap.mit-license.org/2015).

## Author

<a href="https://github.com/ruedap"><img src="https://avatars.githubusercontent.com/u/289671?v=3&s=300" alt="ruedap" title="ruedap" width="100" height="100"></a>
