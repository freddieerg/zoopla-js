# zoopla-js
[![Build Status](https://travis-ci.com/freddieerg/zoopla-js.svg?branch=master)](https://travis-ci.com/freddieerg/zoopla-js)

zoopla-js is a node wrapper for Zoopla's public API. It is written in TypeScript.

## Installation

This package is hosted on GitHub not NPM. To install it you will need to add a scoped registry to your package manager.

Registry URL

```bash
https://npm.pkg.github.com
```

Then install with ether npm or Yarn
```bash
npm install @freddieerg/zoopla-js
```
```bash
yarn add @freddieerg/zoopla-js
```

## Quick Start

```python
import Zoopla from '@freddieerg/zoopla-js';

const zoopla = new Zoopla();

async function getSomeListings() {
  const r = zoopla.propertyListings({area: 'England'});
  console.log(r.listing);
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
