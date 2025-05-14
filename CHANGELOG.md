## v0.9.0

### Interface

-   Rename to Column-based Data Parser

## v0.3.0

### Feature

-   Add `sharedArrayBuffer` option for enabling/disabling use of `SharedArrayBuffer` for data storage. If false, `ArrayBuffer` is used instead. This defaults to false, which marks a change compared to previous behavior.

## v0.2.5

### Interface

-   Expose `DataSource` type in declaration.

## v0.2.4

### Bug Fixes

-   Fix bug where adding columns externally would crash the loader

## v0.2.3

### Bug Fixes

-   [#34](https://github.com/lukaswagner/csv-parser/pull/34): Added workaround for [this vite issue](https://github.com/vitejs/vite/issues/5699)

## v0.2.2

### Bug Fixes

-   [#31](https://github.com/lukaswagner/csv-parser/pull/31): Fixed number of lines used for type inference

## v0.2.1

### Bug Fixes

-   [#29](https://github.com/lukaswagner/csv-parser/issues/29): Fixed `BaseColumn` `get`/`set` functions.

## v0.2

### Features

-   [#12](https://github.com/lukaswagner/csv-parser/issues/12): Added date columns.
-   [#23](https://github.com/lukaswagner/csv-parser/issues/23), [#28](https://github.com/lukaswagner/csv-parser/issues/28): Added `view` accessor to all chunks which store a buffer view internally.

### Bug Fixes

-   [#22](https://github.com/lukaswagner/csv-parser/issues/22): Calling `rebuildColumn` now rebuilds the underlying chunks as well.

### Chores

-   [#21](https://github.com/lukaswagner/csv-parser/issues/21): Include `README.md` and `LICENSE` in npm releases.
