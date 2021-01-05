# Bootstrap Icons workflow for Alfred

[![Latest Version](http://img.shields.io/github/release/ruedap/alfred-bootstrap-icons-workflow.svg?style=flat-square)](https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases/latest)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ruedap/alfred-bootstrap-icons-workflow/blob/main/LICENSE.md)

You can incrementally search for [Bootstrap Icons](https://icons.getbootstrap.com/) and paste it to front most app.

<a href="https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases/latest"><img alt="screencast" src="https://github.com/ruedap/alfred-bootstrap-icons-workflow/raw/assets/images/screencast.gif" width="800"></a>

## Installation

Download **[Bootstrap-Icons.alfredworkflow](https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases/latest)** and import to [Alfred](http://www.alfredapp.com/) (requires Powerpack).

The current supported version is **Bootstrap Icons 1.2.2**. Previous versions are available [here](https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases).

### macOS Catalina refuses to run unsigned binaries by default

There are a few ways to allow such programs to run.  
See: https://github.com/ruedap/alfred-bootstrap-icons-workflow/issues/1

## Usage

**Keyword** `bi`: Search through [Bootstrap Icons](https://icons.getbootstrap.com/).

- `Enter`: Paste SVG code (e.g. code below)

<!-- prettier-ignore-start -->
```html
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-up-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M5.172 10.828a.5.5 0 0 0 .707 0l4.096-4.096V9.5a.5.5 0 1 0 1 0V5.525a.5.5 0 0 0-.5-.5H6.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707z"/>
</svg>
```
<!-- prettier-ignore-end -->

- `Option + Enter`: Paste icon name (e.g. `arrow-up-right-circle`)
- `Command + Enter`: Open icon page in browser (e.g. <https://icons.getbootstrap.com/icons/arrow-up-right-circle/>)

## Options

**Disable pasting**: Turn off "Automatically paste to front most app" in Workflow's Preferences.

<img alt="Disable pasting" src="https://github.com/ruedap/alfred-bootstrap-icons-workflow/raw/assets/images/option-disable-pasting.png" width="800">

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
