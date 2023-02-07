# vue-accessible-headings

[![npm](https://img.shields.io/npm/v/vue-accessible-headings.svg)](https://www.npmjs.com/package/vue-accessible-headings)
[![Test](https://github.com/neet/vue-accessible-headings/actions/workflows/test.yaml/badge.svg)](https://github.com/neet/vue-accessible-headings/actions/workflows/test.yaml)
[![codecov](https://codecov.io/gh/neet/vue-accessible-headings/branch/main/graph/badge.svg?token=6WG7O91HVZ)](https://codecov.io/gh/neet/vue-accessible-headings)

`vue-accessible-headings` is a Vue library that provides two useful components; `v-h` and `v-section`.

![Thumbnail](https://github.com/neet/vue-accessible-headings/blob/main/assets/vue-accessible-headings.png)

This library is inspired by awesome prior art, [`react-headings`](https://github.com/alexnault/react-headings) and [`react-accessible-headings`](https://github.com/springload/react-accessible-headings).

## Components

### `v-h`

`v-h` is a component to represent a heading element in your document. If you put `v-h` in your app, it will automatically turn into one of `h1`, `h2`, `h3`, `h4`, `h5`, or `h6`. The number depends on how much you nest `v-section` in the parent.

### `v-section`

`v-section` is a component to represent a section in your document. It is often a landmark element such as `header`, `main`, `footer` but could also be a subordinate topic of your article.

You always have to include at least one `v-h` inside this component. Otherwise, heading level will be skipped which makes the outline of your document inconsistent.

## License

MIT
