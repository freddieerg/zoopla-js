# zoopla-js
[![Build Status](https://travis-ci.com/freddieerg/zoopla-js.svg?branch=master)](https://travis-ci.com/freddieerg/zoopla-js)

zoopla-js is a node wrapper for Zoopla's public API. It is written in TypeScript.

## Installation
npm
```bash
npm install zoopla-js
```
yarn
```bash
yarn add zoopla-js
```

## Quick Start

```python
import Zoopla from 'zoopla-js';

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
