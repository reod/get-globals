
# get-globals

> Easily find all available global variables in document. No guessing. No manually filtering through `Object.keys(window)`.

## Problem to solve
Imagine you are joining big front-end project and you want to see all global variables available for you. Some options you have:
 1. guess names by typing them in console via dev tools
 2. call `Objec.keys(window).forEach(key => console.log(key))` and match output against values from ECMAScript specification and those non-standard provided by various browser vendor
 3. grab this package and call `global.printGlobals()` and just look at output

(And yea - I suggest you to go with #3.)

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
