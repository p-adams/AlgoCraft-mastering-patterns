export function mergeAlternately(word1: string, word2: string): string {
  let mergeString = "";
  // merge characters of the shorter string
  for (
    let index = 0;
    index <= Math.min(word1.length, word2.length) - 1;
    index++
  ) {
    mergeString += word1[index];
    mergeString += word2[index];
  }
  // append characters from longer string
  mergeString += word1.substring(Math.min(word2.length), word1.length);
  mergeString += word2.substring(Math.min(word1.length), word2.length);
  return mergeString;
}

export function gcdOfStrings(str1: string, str2: string): string {
  // Check if the two strings can be divided by the same substring

  if (str1 + str2 !== str2 + str1) {
    return "";
  }

  // Find the greatest common divisor based on the Euclidean algorithm
  const gcd = (a: number, b: number): number => {
    if (b === 0) return a;
    return gcd(b, a % b);
  };

  const commonLength = gcd(str1.length, str2.length);

  return str1.substring(0, commonLength);
}

export function reverseVowels(s: string): string {
  const vowels = ["a", "e", "i", "o", "u"];
  const vowelSet = new Set(vowels);

  const vowelList = s
    .split("")
    .filter((el) => vowelSet.has(el.toLowerCase()))
    .reverse();

  let res = "";
  let vowelIndex = 0;

  for (let index = 0; index < s.length; index++) {
    const char = s[index];

    if (vowelSet.has(char.toLowerCase())) {
      res += vowelList[vowelIndex++];
    } else {
      res += char;
    }
  }

  return res;
}

export function reverseWords(s: string) {
  return s
    .split(/\s+/)
    .filter((word) => word.trim() !== "")
    .reverse()
    .join(" ");
}

export function productExceptSelf(nums: number[]) {
  const n = nums.length;
  const leftProducts = new Array(n);
  const rightProducts = new Array(n);
  const answer = new Array(n);

  // Calculate the product of all elements to the left of each element
  leftProducts[0] = 1;
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // Calculate the product of all elements to the right of each element
  rightProducts[n - 1] = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightProducts[i] = rightProducts[i + 1] * nums[i + 1];
  }

  // Multiply the left and right products to get the final answer
  for (let i = 0; i < n; i++) {
    answer[i] = leftProducts[i] * rightProducts[i];
  }

  return answer;
}

export function increasingTriplet(nums: number[]) {
  let first = Number.MAX_VALUE; // Initialize with a large value.
  let second = Number.MAX_VALUE; // Initialize with a large value.

  for (const num of nums) {
    if (num <= first) {
      first = num;
    } else if (num <= second) {
      second = num;
    } else {
      // If we find a number greater than both first and second,
      // we have an increasing triplet.
      return true;
    }
  }

  return false; // No increasing triplet found.
}

export function compress(chars: string[]): number {
  if (chars.length <= 1) {
    return chars.length;
  }

  let write = 0; // Index to write the compressed characters
  let count = 1; // Count of consecutive repeating characters

  for (let i = 1; i <= chars.length; i++) {
    if (i < chars.length && chars[i] === chars[i - 1]) {
      // Increment count if the current character is the same as the previous one
      count++;
    } else {
      // Write the current character
      chars[write++] = chars[i - 1];

      if (count > 1) {
        // If count is greater than 1, convert it to a string and write its characters
        const countStr = count.toString();
        for (let j = 0; j < countStr.length; j++) {
          chars[write++] = countStr[j];
        }
      }

      count = 1; // Reset the count for the next character
    }
  }

  return write; // Return the new le
}
