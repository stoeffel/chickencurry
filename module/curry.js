const arity = require('util-arity');

export default ({ placeholder }) => {
  const merge = (dest, origin) => {
    const newArgs = dest.map((i) => {
      let elem = i;
      if (i === placeholder && origin[0]) {
        elem = origin.shift();
      }
      return elem;
    });

    return newArgs.concat(origin);
  };

  const actualLength = (arr) =>
    arr.reduce((len, curr) => curr === placeholder ? len : len + 1, 0);

  const containsPlaceholder = (args) =>
    args.some(arg => arg === placeholder);

  function curry(...initialArgs) {
    const fn = typeof this === 'function' ? this : initialArgs.shift();
    const len = containsPlaceholder(initialArgs) ? initialArgs.length : fn.length;

    const _curry = (...args) => {
      const f = (...newArgs) => {
        const concatedArgs = merge(args, newArgs);
        return ((actualLength(concatedArgs) >= len) ?
          fn(...concatedArgs.slice(0, len)) :
          _curry(...concatedArgs)
        );
      };

      return arity(len - actualLength(args), f);
    };

    return _curry(...initialArgs)();
  }
  return curry;
};
