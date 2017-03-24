
# get-globals

> Easily find all available global variables in document. No guessing. No manually filtering through `Object.keys(window)`.

## Installation

Install using [npm](https://www.npmjs.org/):

```sh
npm install get-globals
```

## Example

```javascript
import globals from 'get-globals';

window.sampleVariable;
window.anotherVariable = true;

// assign output to variable
const availableGlobals = globals.getGlobals();
// availableGlobals = ['sampleVariable', 'anotherVariable'];


// ...or just log global variables 
global.printGlobals();
// prints: Available global variables: sampleVariable, anotherVariable.

```

## Support for node.js

Planed. Stay tuned.

## API
##### `globals.getGlobals()`
Returns all available global variables.

##### `globals.printGlobals()`
Logs all available global variables using `console.log`.
## Support

If you have any problem or suggestion please open an issue [here](https://github.com/reod/get-globals/issues).
