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

export const easy = { compose, createCounter, last, sleep };
