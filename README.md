# cross-worker-bare-kit

Cross-runtime worker abstractions for bare-kit

```
npm i cross-worker-bare-kit
```

## Usage

```js
const { spawn } = require('cross-worker-bare-kit')

const pipe = spawn('./worker', ['arg1', 'arg2'])
```

## License

Apache-2.0
