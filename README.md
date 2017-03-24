
# get-globals

> Easily find all available global variables document. No guessing. No filtering through `Object.keys(window)`.

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

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/reod/get-globals/issues).
