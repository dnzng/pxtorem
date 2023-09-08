# @dnzng/pxtorem

[![npm](https://img.shields.io/npm/v/@dnzng/pxtorem.svg)](https://www.npmjs.com/package/@dnzng/pxtorem)

Convert pixel units to rem units. Mainly used when you only want to use HTML rather than a bundler.

## HTML

```html
<script type="text/javascript" src="https://unpkg.com/@dnzng/pxtorem"></script>
<script type="text/javascript">
  const { pxtorem } = PxToRem
  pxtorem()
</script>
```

## Bundler

### Installation

```bash
npm i @dnzng/pxtorem
# or pnpm
pnpm add @dnzng/pxtorem
# or yarn
yarn add @dnzng/pxtorem
```

### Usage

```js
import { pxtorem } from '@dnzng/pxtorem'

pxtorem()
```

## CSS

If there is a named title element in your design, its width and height are 100px and 30px respectively. When the base option is set to 100, which is default and recommended, You can know its value by simple calculations, and write as follows:

```css
.title {
  width: 1rem;  /* 1rem = 100 / 100  */
  height: .3rem;  /* .3rem = 30 / 100 */
}
```

## API

- `pxtorem(options: Options = {})`

## Options

- `designWidth?: number`: width of your design. default is 750.
- `base?: number`: baseline. default is 100.
- `maxClientWidth?: number`: max client width. default is undefined. When it is set and the client width is more than it, the `font-size` style of the document will keep constant.
- `interval?: number`: the interval to update the `font-size` style of the document element when frequently changing the window size. default is 100 in milliseconds.

# License

MIT
