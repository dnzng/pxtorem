# @dnzng/pxtorem

[![npm](https://img.shields.io/npm/v/@dnzng/pxtorem.svg)](https://www.npmjs.com/package/@dnzng/pxtorem)

Convert pixel units to rem units. Mainly used for when you only want to use HTML rather than a bundler like webpack or vite.

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
```

### Usage

```js
import { pxtorem } from '@dnzng/pxtorem'

pxtorem()
```

## CSS

If there are some named title elements in your design, its width and height are 100px and 30px respectively. When the `base` option is set to 100, which is default and recommended, You can know its value by simple calculations, and write as follows:

```css
.title {
  width: 1rem;  /* 1rem = 100 / 100  */
  height: .3rem;  /* .3rem = 30 / 100 */
}
```

## API

### pxtorem()

#### Type

```typescript
function pxtorem(options: Options = {}): RemoveHandle

interface Options {
  designWidth?: number
  base?: number
  maxClientWidth?: number
  interval?: number
}

type RemoveHandle = () => void
```

#### Details

- `designWidth`: width of your design. default is 750.
- `base`: baseline. default is 100.
- `maxClientWidth`: max client width. default is undefined. When it is set and the client width is more than it, the `font-size` style of the document will keep constant.
- `interval`: the interval to update the `font-size` style of the document element when frequently changing the window size. default is 100 in milliseconds.

After executed, it will add a listener to the `resize` event for the global `window` variable, and you can execute the function returned by it to remove the added listener.

# License

MIT
