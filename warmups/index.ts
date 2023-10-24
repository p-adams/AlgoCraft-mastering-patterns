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
  constructor(val: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.#val = val;
    this.#left = left ?? null;
    this.#right = right ?? null;
  }

  public get val(): number {
    return this.#val;
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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (root1 === null) return root2;
  if (root2 === null) return root1;

  const mergedNode = new TreeNode(root1.val + root2.val);

  mergedNode.left = mergeTrees(root1.left, root2.left);
  mergedNode.right = mergeTrees(root1.right, root2.right);

  return mergedNode;
}

function knightProbability(n: number, k: number, row: number, column: number) {
  // Possible moves for the knight.
  const moves = [
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
    [1, -2],
    [2, -1],
    [2, 1],
    [1, 2],
  ];

  // Initialize a 3D array to store probabilities.
  const dp = Array(k + 1)
    .fill(null)
    .map(() =>
      Array(n)
        .fill(null)
        .map(() => Array(n).fill(0))
    );

  // Initialize with 1, as the knight is initially on the board.
  dp[0][row][column] = 1;

  // Iterate over the number of moves.
  for (let step = 1; step <= k; step++) {
    for (let r = 0; r < n; r++) {
      for (let c = 0; c < n; c++) {
        for (const [dr, dc] of moves) {
          const newRow = r + dr;
          const newColumn = c + dc;

          if (newRow >= 0 && newRow < n && newColumn >= 0 && newColumn < n) {
            dp[step][newRow][newColumn] += dp[step - 1][r][c] / 8;
          }
        }
      }
    }
  }

  // Sum all probabilities after k moves.
  let probability = 0;
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      probability += dp[k][r][c];
    }
  }

  return probability;
}

function isSequence(s: string, t: string): boolean {
  let sIndex = 0;
  for (let tIndex = 0; tIndex < t.length && sIndex < s.length; tIndex++) {
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
  }
  return sIndex === s.length;
}

function isValid(s: string): boolean {
  const stack: string[] = [];
  const brackets: any = {
    "(": ")",
    "{": "}",
    "[": "]",
  };
  for (const char of s) {
    if (brackets[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false; // No matching open bracket
      }
      const lastOpenBracket = stack.pop();
      if (lastOpenBracket && brackets[lastOpenBracket] !== char) {
        return false; // Mismatched brackets
      }
    }
  }
  return stack.length === 0; // Check if all open brackets are closed
}

function largestValues(root: TreeNode): number[] {
  function levelOrderTraversal(root: TreeNode | null): number[][] {
    const result: number[][] = [];

    if (!root) {
      return result;
    }

    const queue: TreeNode[] = [root];

    while (queue.length > 0) {
      const levelSize = queue.length;
      const levelValues: number[] = [];

      for (let i = 0; i < levelSize; i++) {
        const node = queue.shift()!; // Remove and get the first node in the queue
        levelValues.push(node.val);

        if (node.left) {
          queue.push(node.left);
        }

        if (node.right) {
          queue.push(node.right);
        }
      }

      result.push(levelValues);
    }

    return result;
  }

  return levelOrderTraversal(root).reduce<number[]>(
    (acc: number[], curr: number[]) => {
      return [...acc, Math.max(...curr)];
    },
    []
  );
}

export {
  arithmeticTriplets,
  arrReverse,
  checkPalindromeItr,
  checkPalindromeRec,
  countCharacters,
  emojiArtGenerator,
  evenOddNumber,
  isSequence,
  isValid,
  findMaxDiff,
  knightProbability,
  largestValues,
  maxMinElements,
  removeDuplicates,
  twoSum,
  sumOfEvens,
  mergeTrees,
};
