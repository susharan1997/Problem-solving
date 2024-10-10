

const curry = (fn) => {
  const curried = (...args) => (
    args.length >= fn.length
      ? (
        () => {
          return fn(...args);
        })()
      : (
          () => {
          return (...rest) => curried(...args, ...rest);
          }
        )()
  );
  return curried;
};

const add = (x, y, z) => x + y + z;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3));

//output -> 6