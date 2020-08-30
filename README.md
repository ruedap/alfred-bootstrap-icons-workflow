# Bootstrap Icons workflow for Alfred

[![Latest Version](http://img.shields.io/github/release/ruedap/alfred-bootstrap-icons-workflow.svg?style=flat-square)](https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases)
[![License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/ruedap/alfred-bootstrap-icons-workflow/blob/main/LICENSE.md)

You can incrementally search for [Bootstrap Icons](https://icons.getbootstrap.com/) and paste it to front most app.

<a href="https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases"><img alt="screencast" src="https://github.com/ruedap/alfred-bootstrap-icons-workflow/raw/assets/images/screencast.gif" width="800"></a>

## Installation

Download **[Bootstrap-Icons.alfredworkflow](https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases)** and import to [Alfred](http://www.alfredapp.com/) (requires Powerpack).

The current supported version is **Bootstrap Icons 1.0.0**. Previous versions are available [here](https://github.com/ruedap/alfred-bootstrap-icons-workflow/releases).

### macOS Catalina refuses to run unsigned binaries by default

There are a few ways to allow such programs to run.  
See: https://github.com/ruedap/alfred-bootstrap-icons-workflow/issues/1

## Usage

**Keyword** `bi`: Search through [Bootstrap Icons](https://icons.getbootstrap.com/).

- `Enter`: Paste SVG code (e.g. code below)

<!-- prettier-ignore-start -->
```html
<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-bootstrap" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M12 1H4a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4z"/>
  <path fill-rule="evenodd" d="M8.537 12H5.062V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396zM6.375 4.658v2.467h1.558c1.16 0 1.764-.428 1.764-1.23 0-.78-.569-1.237-1.541-1.237H6.375zm1.898 6.229H6.375V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"/>
</svg>
```
<!-- prettier-ignore-end -->

- `Option + Enter`: Paste icon name (e.g. `bootstrap`)
- `Command + Enter`: Open icon page in browser (e.g. <https://icons.getbootstrap.com/icons/arrow-right-circle/>)

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
