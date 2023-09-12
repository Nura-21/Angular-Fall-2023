// Create Hello World Function
const createHelloWorld = () => () => "Hello World";

// Counter
const createCounter = (n) => {
  let counter = n;
  return () => counter++;
};

// To Be Or Not To Be
const expect = (val) => {
  let expected = val;
  return {
    toBe: (test) => {
      if (expected === test) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (test) => {
      if (expected !== test) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};

// Counter II
const createCounter2 = (init) => {
  let start = init;
  let current = init;
  return {
    increment: () => {
      return ++current;
    },
    reset: () => {
      current = start;
      return current;
    },
    decrement: () => {
      return --current;
    },
  };
};
