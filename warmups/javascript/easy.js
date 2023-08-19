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

function twoSum(input, target) {
  const m = new Map();
  for (const [index, iterator] of input.entries()) {
    const complement = target - iterator;
    if (m.has(complement)) {
      return [m.get(complement), index];
    }
    m.set(iterator, index);
  }
}

export const easy = { createCounter, last, sleep, twoSum };
