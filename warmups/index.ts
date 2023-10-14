function maxMinElements(input: number[]): [number, number] {
  return [Math.max(...input), Math.min(...input)];
}

// Remove Duplicates from Sorted Array in place
function removeDuplicates(input: number[]): number[] {
  for (let index = input.length - 1; index > 0; index--) {
    if (input[index] === input[index - 1]) {
      input.splice(index, 1);
    }
  }
  return input;
}

// reverse an Array in Place
function arrReverse(input: number[]): number[] {
  for (let i = 0, j = input.length - 1; i < j; ++i, --j) {
    const temp = input[i];
    input[i] = input[j];
    input[j] = temp;
  }
  return input;
}

// find max difference
function findMaxDiff(input: number[]): number {
  if (input.length < 2) {
    return 0;
  }
  const fst = input[0];
  let maxDiff = input[1] - fst;
  let minEl = fst; // 7

  for (let index = 1; index < input.length; index++) {
    const element = input[index];
    if (element - minEl > maxDiff) {
      maxDiff = element - minEl;
    }
    if (element < minEl) {
      minEl = element;
    }
  }
  return maxDiff;
}

function checkPalindromeItr(s: string): boolean {
  if (s.length <= 1) {
    return true;
  }
  for (let index = 0, j = s.length - 1; index < j; index++, j--) {
    if (s[index] !== s[j]) {
      return false;
    }
  }
  return true;
}

function checkPalindromeRec(s: string): boolean {
  if (s.length <= 1) {
    return true;
  }

  if (s[0] !== s[s.length - 1]) {
    return false;
  }

  return checkPalindromeRec(s.slice(1, s.length - 1));
}

function twoSum(input: number[], target: number): [number, number] | [] {
  const map = new Map<number, number>();
  for (const [index, value] of input.entries()) {
    const comp = target - value;
    if (map.has(comp)) {
      return [map.get(comp)!, index];
    }
    map.set(value, index);
  }

  return [];
}

function sumOfEvens(input: number[]): number {
  return input
    .filter(($i) => $i % 2 === 0)
    .reduce((prev, curr) => curr + prev, 0);
}
/**
 * Create a program that takes a string as input and converts it into a piece of "emoji art."
 * The program should replace each letter in the input string with a corresponding emoji.
 * For example, you might map 'A' to 🌟, 'B' to 🌈, 'C' to 🍔, and so on.
 *  Create a dictionary that maps letters to emojis.
    Write a function that takes an input string and returns the corresponding emoji art.
    Make sure to handle cases where a character doesn't have a corresponding emoji (you can replace it with a generic emoji like ❓).
    Test your program with various input strings to ensure it works correctly.
 * 
 */
function emojiArtGenerator(input: string): string {
  const $input = input.toLocaleLowerCase();
  const alphabet_to_country: { [key: string]: string } = {
    a: "🇦🇺",
    b: "🇧🇷",
    c: "🇨🇦",
    d: "🇩🇪",
    e: "🇪🇬",
    f: "🇫🇷",
    g: "🇬🇧",
    h: "🇭🇳",
    i: "🇮🇳",
    j: "🇯🇵",
    k: "🇰🇷",
    l: "🇱🇷",
    m: "🇲🇽",
    n: "🇳🇬",
    o: "🇴🇲",
    p: "🇵🇪",
    q: "🇶🇦",
    r: "🇷🇺",
    s: "🇸🇬",
    t: "🇹🇷",
    u: "🇺🇸",
    v: "🇻🇳",
    w: "🇼🇸",
    x: "🇽🇰",
    y: "🇾🇪",
    z: "🇿🇦",
  };

  return $input
    .split("")
    .map(($i) => alphabet_to_country[$i] ?? "❓")
    .join("");
}

function _bingBong(): void {
  for (let index = 1; index <= 100; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("BingBong");
    } else if (index % 3 === 0) {
      console.log("Bing");
    } else if (index % 5 === 0) {
      console.log("Bong");
    }
  }
}

// Counting Even and Odd Numbers
function evenOddNumber(input: number[]): { even: number; odd: number } {
  return input.reduce(
    (result, i) =>
      i % 2 === 0
        ? { ...result, even: result.even + 1 }
        : { ...result, odd: result.odd + 1 },
    { even: 0, odd: 0 }
  );
}

// Problem: Count Occurrences of a Character in a String within a Given Range
function countCharacters(
  s: string,
  start: number,
  end: number,
  char: string
): number {
  return s
    .substring(start, end)
    .split("")
    .reduce((prev, curr) => {
      if (curr === char) {
        return prev + 1;
      }
      return prev;
    }, 0);
}

function arithmeticTriplets(input: number[], diff: number): number {
  let occ = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      for (let k = 0; k < input.length; k++) {
        if (input[j] - input[i] === diff && input[k] - input[j] === diff) {
          occ++;
        }
      }
    }
  }
  return occ;
}

export class TreeNode {
  #val: number;
  #left: TreeNode | null;
  #right: TreeNode | null;
  constructor(val: number, left: TreeNode | null, right: TreeNode | null) {
    this.#val = val;
    this.#left = left ?? null;
    this.#right = right ?? null;
  }

  public get val(): number {
    return this.#val;
  }

  public set val(v: number) {
    this.#val = v;
  }

  public get left(): TreeNode | null {
    return this.#left;
  }

  public set left(v: TreeNode | null) {
    this.#left = v;
  }

  public get right(): TreeNode | null {
    return this.#right;
  }

  public set right(v: TreeNode | null) {
    this.#right = v;
  }
}

function mergeTrees(root1: TreeNode, root2: TreeNode): TreeNode | null {
  // TODO: traverse both trees and sum when overlapping
  // return merge trees

  return null;
}

export {
  arithmeticTriplets,
  arrReverse,
  checkPalindromeItr,
  checkPalindromeRec,
  countCharacters,
  emojiArtGenerator,
  evenOddNumber,
  findMaxDiff,
  maxMinElements,
  removeDuplicates,
  twoSum,
  sumOfEvens,
  mergeTrees,
};
