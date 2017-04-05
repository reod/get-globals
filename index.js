(function (root, factory) {

  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
      module.exports = factory();
  } else {
    root['getGlobals'] = factory();
  }

})(this, function () {

  if (typeof document === 'undefined') {
    throw new Error('No node support yet.');
  }

  return {
    getGlobals,
    printGlobals,
  };

  function getGlobals() {
    const forceExclude = [
      'getGlobals',
      'forceExclude',
      'runnerWindow',
      'iWindow',
      'freshContext',
      'globals'
    ];

    const iWindow = document.createElement('iframe');
    document.body.appendChild(iWindow);
    const freshContext = iWindow.contentWindow;

    const globals = Object
      .keys(window)
      .filter(key => !freshContext.hasOwnProperty(key))
      .filter(key => !forceExclude.includes(key));

    document.body.removeChild(iWindow);

    return globals;
  };

  function printGlobals() {
    const globals = getGlobals().join(', ');
    console.log(`Available global variables: ${globals}.`);
  };

});
