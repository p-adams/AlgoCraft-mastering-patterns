// https://leetcode.com/problemset/javascript/?sorting=W3sic29ydE9yZGVyIjoiQVNDRU5ESU5HIiwib3JkZXJCeSI6IkRJRkZJQ1VMVFkifV0%3D

function createCounter(initVal) {
  let count = initVal;
  return () => {
    return count++;
  };
}

function sleep(duration) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve("done");
    }, duration);
  });
}

function last(array) {
  const [res] = array.slice(-1);
  return res === null ? null : res ?? -1;
}

function compose(functions) {
  const $f = functions.reverse();
  return function (x) {
    let result = x;
    for (const [index, _entry] of $f.entries()) {
      result = $f[index](result);
    }

    return result;
  };
}

/**
 * Filter Elements from Array
 * ilteredArr should only contain the elements from the arr for which the expression:
 * fn(arr[i], i) evaluates to a truthy value.
 * A truthy value is a value where Boolean(value) returns true
 * [0, 10, 20, 30], (x) => x > 10)
 */

function filterElements(input, fn) {
  const elements = [];
  for (const [index, i] of input.entries()) {
    if (fn(i, index)) {
      elements.push(i);
    }
  }
  return elements;
}
/**
 * Apply Transform Over Each Element in Array
 * Given an integer array arr and a mapping function fn, return a new array
 * with a transformation applied to each element.
 * The returned array should be created such that returnedArray[i] = fn(arr[i], i).
 */
function mapElements(input, fn) {
  const result = [];
  for (const [index, value] of input.entries()) {
    result[index] = fn(value, index);
  }

  return result;
}

function groupBy(input, fn) {
  const result = {};

  for (const [_, item] of input.entries()) {
    const key = fn(item);
    if (result[key]) {
      result[key].push(item);
    } else {
      result[key] = [item];
    }
  }
  return result;
}

function reduceElements(input, fn, init) {
  if (!input.length) {
    return init;
  }
  let value = Infinity;
  for (const [index, iterator] of input.entries()) {
    if (index === 0) {
      value = fn(init, iterator);
    } else {
      value = fn(value, iterator);
    }
  }
  return value;
}

/*
const spamChecker = antiSpammer();
spamChecker("message1");
spamChecker("message2");
spamChecker("message2");
**/

function _antiSpammer(wait = 10_000) {
  const $incoming = new Map();
  return (incoming) => {
    const currentTime = Date.now();
    if (
      $incoming.has(incoming) &&
      currentTime - $incoming.get(incoming) < wait
    ) {
      console.log(`CANNOT PROCESS: ${incoming}. Please try again :(`);
      return;
    }
    $incoming.set(incoming, currentTime);
    console.log(`PROCESSED: ${incoming}`);
  };
}

export const easy = {
  compose,
  createCounter,
  filterElements,
  groupBy,
  last,
  mapElements,
  reduceElements,
  sleep,
};
