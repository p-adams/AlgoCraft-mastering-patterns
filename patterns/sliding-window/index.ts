function longestSubstring(str: string): number {
  let start = 0;
  let max = 0;
  const map: { [key: string]: number } = {};

  for (const [index, el] of str.split("").entries()) {
    const curr = map[el];
    if (curr !== undefined && curr >= start) {
      start = curr + 1;
    }
    map[el] = index;
    max = Math.max(max, index - start + 1);
  }

  return max;
}

/**
 * Minimum Window Substring: Given two strings, S and T,
 * find the minimum window in S which will contain all the characters of T.
 * This problem can be solved using the sliding window approach to find the smallest window
 * that contains all the characters of T.
 */

function minWindowSubstring(s: string, t: string): string {
  const frequencyMap = new Map<string, number>();

  // Prepare the frequency map for characters in 't'.
  for (const ch of t) {
    frequencyMap.set(ch, (frequencyMap.get(ch) ?? 0) + 1);
  }

  let left = 0;
  let right = 0;
  let requiredCharacters = frequencyMap.size;
  let minLength = Infinity;
  let minWindowStart = 0;

  while (right < s.length) {
    const currentChar = s[right];

    if (frequencyMap.has(currentChar)) {
      frequencyMap.set(currentChar, frequencyMap.get(currentChar)! - 1);
      if (frequencyMap.get(currentChar) === 0) {
        requiredCharacters--;
      }
    }

    while (requiredCharacters === 0) {
      // Update 'minLength' and 'minWindowStart' if the current window is smaller.
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minWindowStart = left;
      }

      const leftChar = s[left];
      if (frequencyMap.has(leftChar)) {
        frequencyMap.set(leftChar, frequencyMap.get(leftChar)! + 1);
        if (frequencyMap.get(leftChar) === 1) {
          requiredCharacters++;
        }
      }

      left++;
    }

    right++;
  }

  return minLength === Infinity
    ? ""
    : s.substring(minWindowStart, minWindowStart + minLength);
}

/**
 * Maximum Sum Subarray of Fixed Size K: Given an array of integers and a positive integer K,
 * find the maximum sum of any contiguous subarray of size K. The sliding
 * window technique can be used to maintain a fixed-size window and efficiently find the maximum sum.
 */

function maxSumSubArray(array: number[], k: number): number {
  let [max, curr, start] = [0, 0, 0];
  for (let end = 0; end < array.length; end++) {
    curr += array[end];
    if (end - start + 1 > k) {
      curr -= array[start];
      start += 1;
    }
    if (curr > max) {
      max = curr;
    }
  }
  return max;
}
/**
 * 
 *  You are given an array of integers, where each integer represents a fruit type. Your task is to find the length of the longest subarray that contains at most two distinct fruit types.
    For example:
    Input: [1, 2, 1, 2, 3], Output: 4 (The longest subarray with at most two distinct fruit types is [1, 2, 1, 2])
    Input: [3, 3, 3, 1, 2, 1, 1, 2, 3, 3], Output: 5 (The longest subarray with at most two distinct fruit types is [2, 1, 1, 2, 3])
 * 
 */
function fruitBasket(input: number[]): number {
  const frequencyMap = new Map<number, number>();
  let [start, end] = [0, 0];
  let maxLength = 0;

  for (end = 0; end < input.length; end++) {
    const fruit = input[end];
    frequencyMap.set(fruit, (frequencyMap.get(fruit) ?? 0) + 1);

    while (frequencyMap.size > 2) {
      const currFruit = input[start];
      frequencyMap.set(currFruit, frequencyMap.get(currFruit)! - 1);
      if (frequencyMap.get(currFruit) === 0) {
        frequencyMap.delete(currFruit);
      }
      start += 1;
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

export { fruitBasket, longestSubstring, maxSumSubArray, minWindowSubstring };
