// https://leetcode.com/problemset/javascript/?sorting=W3sic29ydE9yZGVyIjoiQVNDRU5ESU5HIiwib3JkZXJCeSI6IkRJRkZJQ1VMVFkifV0%3D

function createCounter(initVal) {
  let count = initVal;
  return () => {
    return count++;
  };
}

function sleep(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done");
    }, duration);
  });
}

export const easy = { createCounter, sleep };
