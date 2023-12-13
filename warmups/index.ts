import { MaxHeap, TreeNode } from "./models.ts";

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

function numberOfEmployeesWhoMetTarget(
  hours: number[],
  target: number
): number {
  return hours.filter((h) => h >= target).length;
}

function interpret(command: string): string {
  return command.replaceAll("()", "o").replaceAll("(al)", "al");
}

function countPairs(nums: number[], target: number): number {
  const pairs = [];
  for (let index = 0; index < nums.length; index++) {
    for (let iindex = 0; iindex < nums.length; iindex++) {
      const el = nums[index];
      const el1 = nums[iindex];
      if (index < iindex && el + el1 < target) {
        pairs.push([el, el1]);
      }
    }
  }
  return pairs.length;
}

function getMinimumDifference(root: TreeNode): number {
  let prevValue: null | number = null;
  let minDiff = Infinity;

  function inOrderTraversal(node: TreeNode | null) {
    if (!node) {
      return;
    }

    inOrderTraversal(node.left);

    if (prevValue !== null) {
      const currentDiff = Math.abs(node.val - prevValue);
      minDiff = Math.min(minDiff, currentDiff);
    }

    prevValue = node.val;

    inOrderTraversal(node.right);
  }

  inOrderTraversal(root);

  return minDiff;
}

function balancedStringSplit(s: string): number {
  let c = 0;
  let res = 0;
  for (const itr of s.split("")) {
    if (itr === "L") {
      ++c;
    } else {
      c--;
    }
    if (c === 0) {
      res++;
    }
  }
  return res;
}

function cellsInRange(s: string): string[] {
  const [x, y] = s.split(":");
  const [c1, r1] = x;
  const [c2, r2] = y;
  const colStart = c1.charCodeAt(0) - "A".charCodeAt(0);
  const colEnd = c2.charCodeAt(0) - "A".charCodeAt(0);
  const rowStart = parseInt(r1, 10);
  const rowEnd = parseInt(r2, 10);

  const result: string[] = [];

  for (let col = colStart; col <= colEnd; col++) {
    for (let row = rowStart; row <= rowEnd; row++) {
      const cell = String.fromCharCode("A".charCodeAt(0) + col) + row;
      result.push(cell);
    }
  }

  return result;
}

function longestPalindrome(s: string): string {
  function expandAroundCenter(left: number, right: number): string {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    return s.substring(left + 1, right);
  }

  let longest = "";

  for (let i = 0; i < s.length; i++) {
    const palindrome1 = expandAroundCenter(i, i);
    const palindrome2 = expandAroundCenter(i, i + 1);

    if (palindrome1.length > longest.length) {
      longest = palindrome1;
    }

    if (palindrome2.length > longest.length) {
      longest = palindrome2;
    }
  }

  return longest;
}

function backspaceCompare(s: string, t: string): boolean {
  function processString(str: string): string {
    const result: string[] = [];

    for (const char of str) {
      if (char === "#") {
        result.pop();
      } else {
        result.push(char);
      }
    }

    return result.join("");
  }

  const processedS = processString(s);
  const processedT = processString(t);

  return processedS === processedT;
}

function sortByBits(arr: number[]): number[] {
  function countOnesInBinary(number: number) {
    let count = 0;
    while (number > 0) {
      count += number & 1;
      number >>= 1;
    }
    return count;
  }

  return arr.sort((a, b) => {
    const countA = countOnesInBinary(a);
    const countB = countOnesInBinary(b);

    if (countA === countB) {
      return a - b;
    } else {
      return countA - countB;
    }
  });
}

function checkIfPangram(sentence: string): boolean {
  return new Set(sentence).size === 26;
}

function sortSentence(s: string): string {
  return s
    .split(" ")
    .map((ch) => {
      const [word, index] = ch.split(/(\d+)/);
      return { index: Number(index), word };
    })
    .sort((a, b) => a.index - b.index)
    .map((obj) => obj.word)
    .join(" ");
}

function isAcronym(words: string[], s: string): boolean {
  return words.map((ch) => ch[0]).join("") === s;
}

function finalString(s: string): string {
  let str = "";
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === "i") {
      str = str.split("").reverse().join("");
    } else {
      str += s[i];
    }
  }
  return str;
}

function findMode(root: TreeNode) {
  const modeMap: { [key: number]: number } = {};
  let maxCount = 0;
  const modes: number[] = [];

  function inOrder(node: TreeNode | null) {
    if (node) {
      inOrder(node.left);

      if (modeMap[node.val] === undefined) {
        modeMap[node.val] = 1;
      } else {
        modeMap[node.val]++;
      }

      if (modeMap[node.val] > maxCount) {
        maxCount = modeMap[node.val];
        modes.length = 0;
        modes.push(node.val);
      } else if (modeMap[node.val] === maxCount && !modes.includes(node.val)) {
        modes.push(node.val);
      }

      inOrder(node.right);
    }
  }

  inOrder(root);
  return modes;
}

function removeOuterParentheses(s: string): string {
  let result = "";
  let depth = 0;

  for (const char of s) {
    if (char === "(") {
      if (depth > 0) {
        result += char;
      }
      depth++;
    } else if (char === ")") {
      depth--;
      if (depth > 0) {
        result += char;
      }
    }
  }

  return result;
}

function countAsterisks(s: string): number {
  let lonelyStars = 0;
  let insidePair = false;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "|") {
      insidePair = !insidePair;
    } else if (s[i] === "*" && !insidePair) {
      lonelyStars++;
    }
  }

  return lonelyStars;
}

function leftRightDifference(nums: number[]): number[] {
  const n = nums.length;

  // Calculate the prefix sums for both left and right sides
  const leftSum = new Array(n).fill(0);
  const rightSum = new Array(n).fill(0);

  // Calculate the leftSum array
  let sum = 0;
  for (let i = 0; i < n; i++) {
    leftSum[i] = sum;
    sum += nums[i];
  }

  // Calculate the rightSum array
  sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    rightSum[i] = sum;
    sum += nums[i];
  }

  // Calculate the answer array
  const answer = new Array(n);
  for (let i = 0; i < n; i++) {
    answer[i] = Math.abs(leftSum[i] - rightSum[i]);
  }

  return answer;
}

function sumCounts(nums: number[]): number {
  let result = 0;
  const list = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      list.push(nums.slice(i, j + 1));
    }
  }
  for (let index = 0; index < list.length; index++) {
    const element = list[index];
    result += new Set(element).size ** 2;
  }

  return result;
}

function buildArray(target: number[], n: number): string[] {
  const stk = [];
  const operations = [];

  for (let i = 1, targetIndex = 0; i <= n && targetIndex < target.length; i++) {
    stk.push(i);
    operations.push("Push");

    if (stk[stk.length - 1] === target[targetIndex]) {
      targetIndex++;
    } else {
      stk.pop();
      operations.push("Pop");
    }
  }

  return operations;
}

function sumIndicesWithKSetBits(nums: number[], k: number): number {
  let sum = 0;
  function countOnesInBinary(number: number) {
    let count = 0;
    while (number > 0) {
      count += number & 1;
      number >>= 1;
    }
    return count;
  }
  for (let index = 0; index < nums.length; index++) {
    const count = countOnesInBinary(index);
    if (count === k) {
      sum += nums[index];
    }
  }
  return sum;
}

function maximizeSum(nums: number[], k: number): number {
  let score = 0;
  while (k > 0) {
    const max = Math.max(...nums);
    score += max;
    nums = nums.filter((n) => n !== max);
    nums.push(max + 1);
    --k;
  }
  return score;
}

function romanToInt(s: string): number {
  const rn: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  for (let index = 0; index < s.length; index++) {
    const current = rn[s[index]];
    const next = rn[s[index + 1]];
    if (next && current < next) {
      result -= current;
    } else {
      result += current;
    }
  }
  return result;
}

function findDifference(nums1: number[], nums2: number[]): number[][] {
  const set1 = new Set(nums1);
  const set2 = new Set(nums2);

  const difference1 = [...set1].filter((num) => !set2.has(num));
  const difference2 = [...set2].filter((num) => !set1.has(num));

  return [difference1, difference2];
}

function maximumNumberOfStringPairs(words: string[]): number {
  const reversedWords = new Set();
  let pairs = 0;

  for (const word of words) {
    const reversed = word.split("").reverse().join("");
    if (reversedWords.has(reversed)) {
      pairs++;
      reversedWords.delete(reversed);
    } else {
      reversedWords.add(word);
    }
  }

  return pairs;
}

function sortPeople(names: string[], heights: number[]): string[] {
  return names
    .map((v, i) => ({ name: v, height: heights[i] }))
    .sort((a, b) => b.height - a.height)
    .map((v) => v.name);
}

class SeatManager {
  seats: MinHeap;
  constructor(n: number) {
    this.seats = new MinHeap();
    for (let i = 1; i <= n; i++) {
      this.seats.insert(i);
    }
  }

  reserve(): number {
    return this.seats.extractMin();
  }

  unreserve(seatNumber: number): void {
    this.seats.insert(seatNumber);
  }
}

class MinHeap {
  heap: number[] = [];

  insert(val: number): void {
    this.heap.push(val);
    this.heapifyUp(this.heap.length - 1);
  }

  extractMin(): number {
    if (this.heap.length === 0) {
      throw new Error("No available seats.");
    }
    const min = this.heap[0];
    this.heap[0] = this.heap[this.heap.length - 1];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
  }

  private heapifyUp(index: number): void {
    const parentIndex = Math.floor((index - 1) / 2);
    if (parentIndex >= 0 && this.heap[parentIndex] > this.heap[index]) {
      [this.heap[parentIndex], this.heap[index]] = [
        this.heap[index],
        this.heap[parentIndex],
      ];
      this.heapifyUp(parentIndex);
    }
  }

  private heapifyDown(index: number): void {
    const leftIndex = 2 * index + 1;
    const rightIndex = 2 * index + 2;
    let smallestIndex = index;

    if (
      leftIndex < this.heap.length &&
      this.heap[leftIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = leftIndex;
    }

    if (
      rightIndex < this.heap.length &&
      this.heap[rightIndex] < this.heap[smallestIndex]
    ) {
      smallestIndex = rightIndex;
    }

    if (smallestIndex !== index) {
      [this.heap[index], this.heap[smallestIndex]] = [
        this.heap[smallestIndex],
        this.heap[index],
      ];
      this.heapifyDown(smallestIndex);
    }
  }
}

function separateDigits(nums: number[]): number[] {
  const result = nums.map((n) => {
    const str = n
      .toString()
      .split("")
      .map((el) => Number(el));
    return str;
  });

  return result.flat(2);
}

function deleteGreatestValue(grid: number[][]): number {
  let answer = 0;
  const numRows = grid.length;
  let numCols = grid[0].length;

  while (numCols > 0) {
    let maxDeletedValue = -1;

    for (let row = 0; row < numRows; row++) {
      const max = Math.max(...grid[row]);
      maxDeletedValue = Math.max(maxDeletedValue, max);

      const maxIndex = grid[row].indexOf(max);
      grid[row].splice(maxIndex, 1);
    }

    answer += maxDeletedValue;
    numCols--;
  }

  return answer;
}

function distinctDifferenceArray(nums: number[]): number[] {
  const cnt = new Array(51).fill(0);
  let dist = 0;
  const res: number[] = [];

  for (const n of nums) {
    res.push(
      (res.length === 0 ? 0 : res[res.length - 1]) + (cnt[n]++ === 0 ? 1 : 0)
    );
  }

  for (let i = nums.length - 1; i >= 1; i--) {
    dist += cnt[nums[i]] > 0 ? 1 : 0;
    cnt[nums[i]] = 0;
    res[i - 1] -= dist;
  }

  return res;
}

function findNonMinOrMax(nums: number[]): number {
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  return nums.find((n) => n !== min && n !== max) ?? -1;
}

function sumOfSquares(nums: number[]): number {
  const n = nums.length;
  return nums
    .filter((v, i) => n % (i + 1) === 0 && v)
    .reduce((p, c) => (p += c ** 2), 0);
}

function countSeniors(details: string[]): number {
  return details
    .map((d) => {
      const [a, b, _] = d.substring(11, 15);
      return Number(a + b);
    })
    .filter((v) => v > 60).length;
}

function eliminateMaximum(dist: number[], speed: number[]): number {
  const n = dist.length;
  const arrivalTimes = dist
    .map((d, i) => Math.ceil(d / speed[i]))
    .sort((a, b) => a - b);

  for (let i = 0; i < n; i++) {
    if (arrivalTimes[i] <= i) {
      return i;
    }
  }

  return n;
}

function rowAndMaximumOnes(mat: number[][]): number[] {
  const m = new Map<number, number>();
  for (let row = 0; row < mat.length; row++) {
    const $row = mat[row];
    if ($row.includes(1)) {
      m.set(row, $row.filter((r) => r === 1).length);
    }
  }

  let maxValue = 0;
  let maxKey = 0;

  m.forEach((value, key) => {
    if (value > maxValue) {
      maxValue = value;
      maxKey = key;
    }
  });
  return [maxKey, maxValue];
}

function numberOfPairs(nums: number[]): number[] {
  const m = new Map<number, number>();
  for (const n of nums) {
    if (m.has(n)) {
      m.set(n, m.get(n)! + 1);
    } else {
      m.set(n, 1);
    }
  }
  let pairs = 0;
  let rem = 0;
  m.forEach((v) => {
    if (v % 2 === 0) {
      pairs += v / 2;
    } else {
      pairs += Math.floor(v / 2);
      rem += v % 2;
    }
  });

  return [pairs, rem];
}

function mergeSimilarItems(items1: number[][], items2: number[][]): number[][] {
  const mergedItems = new Map();

  for (const [value, weight] of items1) {
    if (mergedItems.has(value)) {
      mergedItems.set(value, mergedItems.get(value) + weight);
    } else {
      mergedItems.set(value, weight);
    }
  }

  for (const [value, weight] of items2) {
    if (mergedItems.has(value)) {
      mergedItems.set(value, mergedItems.get(value) + weight);
    } else {
      mergedItems.set(value, weight);
    }
  }

  const ret = Array.from(mergedItems).map(([value, weight]) => [value, weight]);
  ret.sort((a, b) => a[0] - b[0]);

  return ret;
}

function partitionString(s: string): number {
  const seen = new Set();
  let partitions = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (!seen.has(char)) {
      seen.add(char);
    } else {
      seen.clear();
      seen.add(char);
      partitions++;
    }
  }

  return partitions + 1;
}

function countHomogenous(s: string): number {
  const MOD = 1e9 + 7;
  let count = 0;
  let length = 1;

  for (let i = 1; i <= s.length; i++) {
    if (i < s.length && s[i] === s[i - 1]) {
      length++;
    } else {
      count += (length * (length + 1)) / 2;
      length = 1;
    }

    count %= MOD;
  }

  return count;
}

function vowelStrings(words: string[], left: number, right: number): number {
  const isVowel = (ch: string) => ["a", "e", "i", "o", "u"].includes(ch);
  const portion = words.slice(left, right + 1);
  let c = 0;
  for (const word of portion) {
    const fst = word.charAt(0);
    const lst = word.charAt(word.length - 1);

    if (isVowel(fst) && isVowel(lst)) {
      ++c;
    }
  }

  return c;
}

function calculate(s: string): number {
  const stack = [];
  let num = 0;
  let sign = 1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      num = num * 10 + parseInt(char);
    } else if (char === "+") {
      result += sign * num;
      sign = 1;
      num = 0;
    } else if (char === "-") {
      result += sign * num;
      sign = -1;
      num = 0;
    } else if (char === "*" || char === "/") {
      let j = i + 1;
      while (j < s.length && s[j] === " ") {
        j++; // Skip any whitespace
      }
      let nextNum = 0;
      while (j < s.length && s[j] >= "0" && s[j] <= "9") {
        nextNum = nextNum * 10 + parseInt(s[j]);
        j++;
      }
      if (char === "*") {
        num *= nextNum;
      } else {
        num = Math.trunc(num / nextNum);
      }
      i = j - 1;
    }
  }

  result += sign * num;

  return result;
}

function mergeArrays(nums1: number[][], nums2: number[][]): number[][] {
  const mergedItems = new Map();
  function mergeItem(items: number[][]) {
    for (const [id, value] of items) {
      if (mergedItems.has(id)) {
        mergedItems.set(id, mergedItems.get(id) + value);
      } else {
        mergedItems.set(id, value);
      }
    }
  }

  mergeItem(nums1);
  mergeItem(nums2);

  return Array.from(mergedItems)
    .map(([id, value]) => [id, value])
    .sort((a, b) => a[0] - b[0]);
}

function restoreArray(adjacentPairs: number[][]): number[] {
  const adjacencyMap = new Map();

  // Build an adjacency map
  for (const pair of adjacentPairs) {
    if (!adjacencyMap.has(pair[0])) {
      adjacencyMap.set(pair[0], []);
    }
    if (!adjacencyMap.has(pair[1])) {
      adjacencyMap.set(pair[1], []);
    }
    adjacencyMap.get(pair[0]).push(pair[1]);
    adjacencyMap.get(pair[1]).push(pair[0]);
  }

  // Find the start point (a point with only one connection)
  let start = 0;
  for (const [key, value] of adjacencyMap.entries()) {
    if (value.length === 1) {
      start = key;
      break;
    }
  }

  // Reconstruct the array
  const result: number[] = [];
  const visited = new Set();

  function dfs(node: number) {
    visited.add(node);
    result.push(node);

    for (const neighbor of adjacencyMap.get(node)) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  dfs(start);
  return result;
}

function minimumOperations(nums: number[]): number {
  let operations = 0;

  while (true) {
    let minNonZero = Infinity;
    for (const num of nums) {
      if (num > 0 && num < minNonZero) {
        minNonZero = num;
      }
    }
    if (minNonZero === Infinity) {
      break;
    }
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 0) {
        nums[i] -= minNonZero;
      }
    }
    operations++;
  }
  return operations;
}

function intersection(nums1: number[], nums2: number[]): number[] {
  return Array.from(new Set(nums1.filter((n) => nums2.includes(n))));
}

function answerQueries(nums: number[], queries: number[]): number[] {
  nums.sort((a, b) => a - b);
  const result = [];

  for (const query of queries) {
    let count = 0;
    let sum = 0;

    for (const num of nums) {
      sum += num;

      if (sum <= query) {
        count++;
      }
    }

    result.push(count);
  }

  return result;
}

function maximumValue(strs: string[]): number {
  let max = 0;
  for (const it of strs) {
    const hasChar = it.match(/[a-zA-Z]+/g);
    if (hasChar) {
      max = Math.max(max, it.length);
    } else {
      const matches = it.match(/\d+/g);
      const digitSum = matches?.reduce(
        (prev, curr) => Number(prev) + Number(curr),
        0
      );
      max = Math.max(max, digitSum!);
    }
  }

  return max;
}

function maximumCount(nums: number[]): number {
  const neg = nums.filter((n) => n < 0);
  const pos = nums.filter((n) => n > 0);
  return Math.max(neg.length, pos.length);
}

function unequalTriplets(nums: number[]): number {
  let count = 0;
  const hasDuplicates = (arr: number[]) =>
    arr.some((item, index) => arr.indexOf(item) !== index);
  for (const [ii, i] of nums.entries()) {
    for (const [jj, j] of nums.entries()) {
      for (const [kk, k] of nums.entries()) {
        if (ii < jj && jj < kk) {
          const res = [i, j, k];
          if (!hasDuplicates(res)) {
            count++;
          }
        }
      }
    }
  }
  return count;
}

function sortVowels(s: string): string {
  const isVowel = (ch: string) =>
    ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"].includes(ch);

  const vowels = [];
  const str: string[] = s.split("");

  for (let i = 0; i < str.length; i++) {
    const ch = str[i];
    if (isVowel(ch)) {
      vowels.push(ch);
      str[i] = "*";
    }
  }

  vowels.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0));

  for (let i = 0, v = 0; i < str.length; i++) {
    if (str[i] === "*") {
      str[i] = vowels[v];
      v++;
    }
  }

  return str.join("");
}

function countPalindromicSubsequence(s: string): number {
  const letterSet = new Set();
  let res = 0;
  for (let i = 0; i < s.length; i++) {
    if (letterSet.has(s[i])) continue;
    const tempSet = new Set();
    letterSet.add(s[i]);
    const lastIndex = s.lastIndexOf(s[i]);
    if (lastIndex !== i) {
      for (let j = i + 1; j < lastIndex; j++) {
        tempSet.add(s[j]);
      }
      res += tempSet.size;
    }
  }
  return res;
}

function maximumStrongPairXor(nums: number[]): number {
  let max = -Infinity;
  for (const x of nums) {
    for (const y of nums) {
      if (Math.abs(x - y) <= Math.min(x, y)) {
        const xOr = x ^ y;
        max = Math.max(max, xOr);
      }
    }
  }
  return max;
}

function findChampion(grid: number[][]): number {
  const n = grid.length;

  for (let teamA = 0; teamA < n; teamA++) {
    let isChampion = true;

    for (let teamB = 0; teamB < n; teamB++) {
      if (teamA !== teamB && grid[teamB][teamA] === 1) {
        // If there is a team stronger than teamA, teamA is not the champion
        isChampion = false;
        break;
      }
    }

    if (isChampion) {
      // If no team is stronger than teamA, teamA is the champion
      return teamA;
    }
  }

  // If no champion is found, return -1 or any other appropriate value
  return -1;
}

function maximumElementAfterDecrementingAndRearranging(arr: number[]): number {
  arr.sort((a, b) => a - b); // Sort the array in ascending order

  // Ensure the first element is 1
  arr[0] = 1;

  // Iterate through the array to satisfy the second condition
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      arr[i] = arr[i - 1] + 1;
    }
  }

  // The maximum element in the modified array is the answer
  return Math.max(...arr);
}

function frequencySort(nums: number[]): number[] {
  const m = new Map<number, number>();
  for (const n of nums) {
    if (m.has(n)) {
      m.set(n, m.get(n)! + 1);
    } else {
      m.set(n, 1);
    }
  }
  const freq = Array.from(m).sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });

  const modifiedArray: number[] = [];
  for (const num of freq) {
    const [n, c] = num;
    modifiedArray.push(...Array(c).fill(n));
  }

  return modifiedArray;
}

function findDifferentBinaryString(nums: string[]): string {
  const n = nums[0].length;
  const allBinaryStrings: string[] = [];
  let res = "";
  for (let index = 0; index < 2 ** n; index++) {
    const binaryString = index.toString(2).padStart(n, "0");
    allBinaryStrings.push(binaryString);
  }
  for (const binaryString of allBinaryStrings) {
    if (!nums.includes(binaryString)) {
      res = binaryString;
    }
  }
  return res;
}

function countStudents(students: number[], sandwiches: number[]): number {
  let movementToEnd = 0;

  while (sandwiches.length > 0) {
    if (students[0] === sandwiches[0]) {
      students.shift();
      sandwiches.shift();
      movementToEnd = 0;
    } else {
      students.push(students.shift()!);
      movementToEnd++;
      if (movementToEnd === students.length) {
        break;
      }
    }
  }
  return students.length;
}

function islandPerimeter(grid: number[][]): number {
  const row = grid.length;
  const cols = grid[0].length;
  let perimeter = 0;
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1) {
        perimeter += 4;
        if (i > 0 && grid[i - 1][j] === 1) {
          perimeter -= 2;
        }
        if (j > 0 && grid[i][j - 1] === 1) {
          perimeter -= 2;
        }
      }
    }
  }
  return perimeter;
}

function checkDistances(s: string, distance: number[]): boolean {
  const map = new Map<string, number>(); // character, index
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const gotIndex = map.get(c);
    if (gotIndex === undefined) {
      map.set(c, i);
      continue;
    }

    const charIndex = c.charCodeAt(0) - "a".charCodeAt(0);
    const actualDistance = i - gotIndex - 1;
    if (distance[charIndex] !== actualDistance) return false;
  }
  return true;
}

function minPairSum(nums: number[]): number {
  const sNums = nums.sort((a, b) => a - b);
  const pairs = [];
  let i = 0;
  let j = sNums.length - 1;

  while (i < j) {
    pairs.push([sNums[i], sNums[j]]);
    i++;
    j--;
  }
  const res = [];
  for (const pair of pairs) {
    const [a, b] = pair;
    res.push(a + b);
  }
  return Math.max(...res);
}

function canMakeArithmeticProgression(arr: number[]): boolean {
  function areAllValuesSame(arr: number[]): boolean {
    if (arr.length === 0) {
      // Empty array, all values are technically the same
      return true;
    }

    const firstValue = arr[0];

    // Check if every value is the same as the first value
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] !== firstValue) {
        return false;
      }
    }

    return true;
  }
  const sArr = arr.sort((a, b) => a - b);
  const diffs = [];
  for (let index = 1; index < sArr.length; index++) {
    const diff = Math.abs(sArr[index] - sArr[index - 1]);
    diffs.push(diff);
  }
  return areAllValuesSame(diffs);
}

function similarPairs(words: string[]): number {
  const eqSet = (xs: Set<string>, ys: Set<string>) =>
    xs.size === ys.size && [...xs].every((x) => ys.has(x));
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      const a = new Set(words[i]);
      const b = new Set(words[j]);
      if (eqSet(a, b)) {
        count++;
      }
    }
  }
  return count;
}

function findTheArrayConcVal(nums: number[]): number {
  let count = 0;

  while (nums.length > 0) {
    if (nums.length > 1) {
      const lEl = nums.shift()!.toString();
      const rEl = nums.pop()!.toString();
      count += Number(lEl + rEl);
    } else {
      // Only one element left
      count += nums.pop()!;
    }
  }

  return count;
}

function commonChars(words: string[]): string[] {
  const result: string[] = [];
  const charCount: { [key: string]: number } = {};

  // Initialize charCount with the frequency of characters in the first word
  for (const char of words[0]) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Iterate through the remaining words
  for (let i = 1; i < words.length; i++) {
    const currentCharCount: { [key: string]: number } = {};

    // Count the frequency of characters in the current word
    for (const char of words[i]) {
      currentCharCount[char] = (currentCharCount[char] || 0) + 1;
    }

    // Update charCount to keep only the minimum frequency of characters
    for (const key in charCount) {
      if (currentCharCount[key] === undefined) {
        charCount[key] = 0;
      }
      charCount[key] = Math.min(charCount[key], currentCharCount[key] || 0);
    }
  }

  // Build the result array based on the final frequency in charCount
  for (const key in charCount) {
    for (let j = 0; j < charCount[key]; j++) {
      result.push(key);
    }
  }

  return result;
}

function maxFrequency(nums: number[], k: number): number {
  const $nums = nums.sort((a, b) => a - b);
  const n = $nums.length;
  let maxFreq = 1;
  let left = 0;
  let currentSum = 0;
  for (let right = 0; right < n; right++) {
    currentSum += $nums[right];
    while ($nums[right] * (right - left + 1) - currentSum > k) {
      currentSum -= $nums[left];
      left += 1;
    }
    maxFreq = Math.max(maxFreq, right - left + 1);
  }

  return maxFreq;
}

function relativeSortArray(arr1: number[], arr2: number[]): number[] {
  const m = new Map();
  for (const [i, v] of arr2.entries()) {
    m.set(v, i);
  }
  const compare = (x: number, y: number): number => {
    const indexX = m.get(x) !== undefined ? m.get(x) : Number.POSITIVE_INFINITY;
    const indexY = m.get(y) !== undefined ? m.get(y) : Number.POSITIVE_INFINITY;

    // If both elements are in arr2, compare them based on their indices
    if (
      indexX !== Number.POSITIVE_INFINITY &&
      indexY !== Number.POSITIVE_INFINITY
    ) {
      return indexX - indexY;
    }
    // If only one element is in arr2, prioritize the one that is in arr2
    else if (indexX !== Number.POSITIVE_INFINITY) {
      return -1;
    } else if (indexY !== Number.POSITIVE_INFINITY) {
      return 1;
    }
    // If neither element is in arr2, compare them in ascending order
    else {
      return x - y;
    }
  };
  const res = arr1.sort(compare);
  return res;
}

function isToeplitzMatrix(matrix: number[][]): boolean {
  const m = matrix.length; // Number of rows
  const n = matrix[0].length; // Number of columns

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // Check if the current element is equal to its top-left neighbor
      if (matrix[i][j] !== matrix[i - 1][j - 1]) {
        return false; // If not equal, it's not a Toeplitz matrix
      }
    }
  }

  return true; // All elements have been checked and are equal
}

function findDiagonalOrder(nums: number[][]): number[] {
  if (!nums || nums.length === 0 || nums[0].length === 0) {
    return [];
  }

  const numRows = nums.length;
  const numCols = Math.max(...nums.map((row) => row.length));
  const result: number[] = [];

  for (let sum = 0; sum < numRows + numCols - 1; sum++) {
    if (sum % 2 === 0) {
      // Going up
      for (
        let row = Math.min(sum, numRows - 1);
        row >= 0 && sum - row < numCols;
        row--
      ) {
        if (nums[row] && nums[row][sum - row] !== undefined) {
          result.push(nums[row][sum - row]);
        }
      }
    } else {
      // Going down
      for (
        let row = Math.min(sum, numRows - 1);
        row >= 0 && sum - row < numCols;
        row--
      ) {
        if (nums[row] && nums[row][sum - row] !== undefined) {
          result.push(nums[row][sum - row]);
        }
      }
    }
  }

  return result;
}

function nearestValidPoint(x: number, y: number, points: number[][]): number {
  let minDist = Infinity;
  let minIndex = -1;

  for (let index = 0; index < points.length; index++) {
    const point = points[index];

    if (point[0] === x || point[1] === y) {
      const dist = Math.abs(x - point[0]) + Math.abs(y - point[1]);

      if (dist < minDist) {
        minDist = dist;
        minIndex = index;
      }
    }
  }

  return minIndex;
}

function checkArithmeticSubarrays(
  nums: number[],
  l: number[],
  r: number[]
): boolean[] {
  const result: boolean[] = [];

  for (let i = 0; i < l.length; i++) {
    const subarray = nums.slice(l[i], r[i] + 1);
    subarray.sort((a, b) => a - b); // Sort the subarray in ascending order

    const commonDifference = subarray[1] - subarray[0];
    let isArithmetic = true;

    for (let j = 1; j < subarray.length; j++) {
      if (subarray[j] - subarray[j - 1] !== commonDifference) {
        isArithmetic = false;
        break;
      }
    }

    result.push(isArithmetic);
  }

  return result;
}

function findMaxK(nums: number[]): number {
  const numSet = new Set(nums);

  let maxK = -1;

  for (const n of nums) {
    if (n > 0 && numSet.has(-n)) {
      maxK = Math.max(maxK, n);
    }
  }

  return maxK;
}

function numberOfLines(widths: number[], s: string): number[] {
  let lines = 1; // Initialize the number of lines to 1
  let currentWidth = 0; // Initialize the width of the current line to 0

  for (const char of s) {
    const charWidth: number = widths[char.charCodeAt(0) - "a".charCodeAt(0)]; // Get the width of the current character
    if (currentWidth + charWidth > 100) {
      lines += 1; // Start a new line
      currentWidth = 0; // Reset the width for the new line
    }
    currentWidth += charWidth; // Add the width of the current character to the current line
  }

  return [lines, currentWidth];
}

function getRow(rowIndex: number): number[] {
  function generatePascalsTriangle(numRows: number): number[][] {
    const triangle: number[][] = [];

    for (let i = 0; i <= numRows; i++) {
      const row: number[] = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          row[j] = 1; // The first and last element in each row is 1
        } else {
          // Calculate the middle elements based on the sum of the two elements above them
          row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
      }
      triangle.push(row);
    }

    return triangle;
  }
  const triangle = generatePascalsTriangle(rowIndex);
  return triangle[rowIndex];
}

function findTheDistanceValue(
  arr1: number[],
  arr2: number[],
  d: number
): number {
  function isDistanceValid(element: number): boolean {
    for (const num of arr2) {
      if (Math.abs(element - num) <= d) {
        return false; // Distance condition not satisfied
      }
    }
    return true; // Distance condition satisfied
  }

  let result = 0;

  for (const element of arr1) {
    if (isDistanceValid(element)) {
      result += 1;
    }
  }

  return result;
}

function shiftGrid(grid: number[][], k: number): number[][] {
  const m = grid.length;
  const n = grid[0].length;
  while (k > 0) {
    const newGrid = Array.from({ length: m }, () => Array(n).fill(0));
    for (let i = 0; i < m; ++i) {
      for (let j = 0; j < n; ++j) {
        const newI = (i + Math.floor((j + 1) / n)) % m;
        const newJ = (j + 1) % n;

        // Update the new grid with the shifted values
        newGrid[newI][newJ] = grid[i][j];
      }
    }
    grid = newGrid;
    k--;
  }
  return grid;
}

function findMiddleIndex(nums: number[]): number {
  const n = nums.length;

  // Calculate the prefix sums for both left and right sides
  const leftSum = new Array(n).fill(0);
  const rightSum = new Array(n).fill(0);

  // Calculate the leftSum array
  let sum = 0;
  for (let i = 0; i < n; i++) {
    leftSum[i] = sum;
    sum += nums[i];
  }

  // Calculate the rightSum array
  sum = 0;
  for (let i = n - 1; i >= 0; i--) {
    rightSum[i] = sum;
    sum += nums[i];
  }

  // Find the leftmost middleIndex
  for (let i = 0; i < n; i++) {
    if (leftSum[i] === rightSum[i]) {
      return i; // Return the first index that satisfies the condition
    }
  }

  return -1; // Return -1 if no such index is found
}

function trimMean(arr: number[]): number {
  const $arr = arr.sort((a, b) => a - b);
  const len = $arr.length;
  let trim = Math.round((5 / 100) * len);
  while (trim > 0) {
    $arr.shift();
    $arr.pop();
    --trim;
  }

  const sum = $arr.reduce((acc, val) => acc + val, 0);
  const mean = sum / $arr.length;
  return mean;
}

function findWordsContaining(words: string[], x: string): number[] {
  const res = words
    .map((word, index) => (word.includes(x) ? index : null))
    .filter((v) => v !== null) as number[];
  return res;
}

function applyOperations(nums: number[]): number[] {
  for (let index = 0; index < nums.length - 1; index++) {
    const ith = nums[index];
    const nxt = nums[index + 1];
    if (ith === nxt) {
      nums[index] = ith * 2;
      nums[index + 1] = 0;
    } else {
      nums[index] = ith;
    }
  }
  return [...nums.filter((n) => n !== 0), ...nums.filter((n) => n === 0)];
}

function hammingWeight(n: number) {
  let count = 0;

  while (n !== 0) {
    count += n & 1;
    n >>>= 1; // Use unsigned right shift to handle signed integers
  }

  return count;
}

class MyHashSet {
  #hash: { [key: number]: boolean } = {};
  constructor() {}

  add(key: number): void {
    this.#hash[key] = true;
  }

  remove(key: number): void {
    delete this.#hash[key];
  }

  contains(key: number): boolean {
    return this.#hash[key] === true;
  }
}

function countCharacters2(words: string[], chars: string): number {
  const freq = new Map<string, number>();
  let result = 0;

  // Count frequencies of characters in chars
  for (let i = 0; i < chars.length; i++) {
    const ch = chars[i];
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  // Check each word
  for (const word of words) {
    const wordFreq = new Map<string, number>();

    // Count frequencies of characters in the word
    for (let i = 0; i < word.length; i++) {
      const ch = word[i];
      wordFreq.set(ch, (wordFreq.get(ch) || 0) + 1);
    }

    // Check if the word can be formed
    let canFormWord = true;
    for (const [ch, count] of wordFreq) {
      if (!freq.has(ch) || freq.get(ch)! < count) {
        canFormWord = false;
        break;
      }
    }

    // If the word can be formed, add its length to the result
    if (canFormWord) {
      result += word.length;
    }
  }

  return result;
}

function maxHouseDistance(colors: number[]): number {
  let max = 0;
  for (let i = 0; i < colors.length; i++) {
    for (let j = i + 1; j < colors.length; j++) {
      if (colors[i] !== colors[j]) {
        const distance = Math.abs(i - j);
        max = Math.max(max, distance);
      }
    }
  }
  return max;
}

function minStartValue(nums: number[]): number {
  let startValue = 1; // initial positive value
  let sum = startValue; // current sum

  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    sum += element;

    if (sum < 1) {
      startValue += 1; // update startValue
      sum = startValue; // reset sum to the new startValue
      index = -1; // restart the loop from the beginning
    }
  }

  return startValue; // return the minimum positive value
}

function transpose(matrix: number[][]): number[][] {
  const r = matrix.length;
  const c = matrix[0].length;
  const transposedMatrix: number[][] = [];
  for (let j = 0; j < c; j++) {
    transposedMatrix[j] = new Array(r);
  }
  for (let i = 0; i < r; i++) {
    for (let j = 0; j < c; j++) {
      transposedMatrix[j][i] = matrix[i][j];
    }
  }
  return transposedMatrix;
}

function findColumnWidth(grid: number[][]): number[] {
  const numRows = grid.length;
  const numCols = grid[0].length;
  const columns = [];
  for (let col = 0; col < numCols; col++) {
    const column = [];
    for (let row = 0; row < numRows; row++) {
      column.push(grid[row][col].toString());
    }
    columns.push(column);
  }
  return columns.reduce((prev: number[], curr) => {
    let max = curr[0].length;
    for (const c of curr) {
      if (c.length > max) {
        max = c.length;
      }
    }
    return prev.concat(max);
  }, []);
}

function pickGifts(gifts: number[], k: number): number {
  const floor = (n: number) => Math.floor(Math.sqrt(n));
  for (let count = 0; count < k; count++) {
    let maxIndex = 0;
    // Find the index of the pile with the maximum number of gifts
    for (let index = 1; index < gifts.length; index++) {
      if (gifts[index] > gifts[maxIndex]) {
        maxIndex = index;
      }
    }
    // Leave behind the floor of the square root of the gifts in the chosen pile
    gifts[maxIndex] = floor(gifts[maxIndex]);
  }
  // Calculate the total remaining gifts after k seconds
  return gifts.reduce((a, b) => a + b, 0);
}

function arrayStringsAreEqual(word1: string[], word2: string[]): boolean {
  const str1 = word1.join("");
  const str2 = word2.join("");
  return str1 === str2;
}

class MyHashMap {
  #hm: { [key: number]: number } = {};
  constructor() {}

  put(key: number, value: number): void {
    this.#hm[key] = value;
  }

  get(key: number): number {
    return this.#hm[key] ?? -1;
  }

  remove(key: number): void {
    delete this.#hm[key];
  }
}

function findLucky(arr: number[]): number {
  const freq = new Map<number, number>();
  for (const iterator of arr) {
    if (freq.has(iterator)) {
      freq.set(iterator, freq.get(iterator)! + 1);
    } else {
      freq.set(iterator, 1);
    }
  }
  const luckyNumbers = [];
  for (const [k, v] of freq.entries()) {
    if (k === v) {
      luckyNumbers.push(k);
    }
  }
  return luckyNumbers.length ? Math.max(...luckyNumbers) : -1;
}

function checkXMatrix(grid: number[][]): boolean {
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      const curr = grid[i][j];
      if (i === j || i === grid.length - 1 - j) {
        if (curr === 0) {
          return false;
        }
      } else {
        if (curr !== 0) {
          return false;
        }
      }
    }
  }
  return true;
}

function arraySign(nums: number[]): number {
  function signFunc(x: number) {
    if (x > 0) {
      return 1;
    } else if (x < 0) {
      return -1;
    } else {
      return 0;
    }
  }
  return signFunc(nums.reduce((a, b) => a * b, 1));
}

function minCostClimbingStairs(cost: number[]): number {
  const dp = new Array(cost.length);
  dp[0] = cost[0];
  dp[1] = cost[1];
  for (let index = 2; index < cost.length; index++) {
    dp[index] = cost[index] + Math.min(dp[index - 1], dp[index - 2]);
  }
  const [a, b] = dp.slice(-2);
  return Math.min(a, b);
}

function largestGoodInteger(num: string): string {
  let max = -Infinity;
  for (const v of [
    "999",
    "888",
    "777",
    "666",
    "555",
    "444",
    "333",
    "222",
    "111",
    "000",
  ]) {
    const match = num.match(v)?.[0];
    if (match) {
      max = Math.max(max, Number(match));
    }
  }
  return max === 0 ? "000" : max !== -Infinity ? String(max) : "";
}

function numberOfMatches(n: number): number {
  let matches = 0;
  let teams = n;
  while (teams > 1) {
    if (teams % 2 === 0) {
      matches += teams / 2;
      teams = teams / 2;
    } else {
      matches += (teams - 1) / 2;
      teams = (teams - 1) / 2 + 1;
    }
  }

  return matches;
}

function totalMoney(n: number): number {
  let res = 0;

  for (let i = 0; i < n; i++) {
    // Calculate the amount for each day based on its position in the sequence
    res += (i % 7) + Math.floor(i / 7) + 1;
  }

  return res;
}

function largestOddNumber(num: string): string {
  for (let i = num.length - 1; i >= 0; i--) {
    const digit = parseInt(num[i]);

    if (digit % 2 === 1) {
      return num.substring(0, i + 1);
    }
  }

  return "";
}

function findPeaks(mountain: number[]): number[] {
  const peaks = [];
  for (let index = 1; index < mountain.length - 1; index++) {
    const curr = mountain[index];
    const prev = mountain[index - 1];
    const next = mountain[index + 1];
    if (curr > prev && curr > next) {
      peaks.push(index);
    }
  }
  return peaks;
}

function tree2str(root: TreeNode | null): string {
  if (root === null) {
    return "";
  }

  const left = tree2str(root.left);
  const right = tree2str(root.right);

  if (left === "" && right === "") {
    return `${root.val}`;
  }

  if (right === "") {
    return `${root.val}(${left})`;
  }

  return `${root.val}(${left})(${right})`;
}

function lastStoneWeight(stones: number[]): number {
  const maxHeap = new MaxHeap();

  for (const stone of stones) {
    maxHeap.push(stone);
  }

  while (maxHeap.heap.length > 1) {
    const stone1 = maxHeap.pop()!;
    const stone2 = maxHeap.pop()!;

    if (stone1 !== stone2) {
      maxHeap.push(Math.abs(stone2 - stone1));
    }
  }

  return maxHeap.heap.length === 1 ? maxHeap.heap[0] : 0;
}

function inorderTraversal(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  const left = inorderTraversal(root.left);
  const right = inorderTraversal(root.right);

  // Concatenate left, root value, and right
  return [...left, root.val, ...right];
}

function findKDistantIndices(nums: number[], key: number, k: number): number[] {
  const n = nums.length,
    result: number[] = [];
  let j = 0;
  for (let i = 0; i < n; i++)
    if (nums[i] === key) {
      const end = Math.min(n, i + k + 1);
      j = Math.max(i - k, j);
      while (j < end) result.push(j++);
    }
  return result;
}

function findSpecialInteger(arr: number[]): number {
  const m = new Map();
  for (const el of arr) {
    if (m.has(el)) {
      m.set(el, m.get(el) + 1);
    } else {
      m.set(el, 1);
    }
  }

  for (const [i, v] of m.entries()) {
    if (v > Math.floor(arr.length / 4)) {
      return i;
    }
  }
  return -1;
}

function maxProduct(nums: number[]): number {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1 + i; j < nums.length; j++) {
      max = Math.max(max, (nums[i] - 1) * (nums[j] - 1));
    }
  }
  return max;
}

function numSpecial(mat: number[][]): number {
  function checkSpecial(
    mat: number[][],
    row: number,
    column: number,
    numRows: number,
    numCols: number
  ) {
    for (let index = 0; index < numCols; index++) {
      if (index !== column && mat[row][index] === 1) {
        return false;
      }
    }

    for (let index = 0; index < numRows; index++) {
      if (index !== row && mat[index][column] === 1) {
        return false;
      }
    }

    return true;
  }
  let pos = 0;
  const m = mat.length;
  const n = mat[0].length;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 1) {
        if (checkSpecial(mat, i, j, m, n)) {
          pos++;
        }
      }
    }
  }
  return pos;
}

export {
  numSpecial,
  maxProduct,
  findSpecialInteger,
  findKDistantIndices,
  inorderTraversal,
  lastStoneWeight,
  tree2str,
  findPeaks,
  largestOddNumber,
  totalMoney,
  numberOfMatches,
  largestGoodInteger,
  minCostClimbingStairs,
  arraySign,
  checkXMatrix,
  findLucky,
  MyHashMap,
  arrayStringsAreEqual,
  pickGifts,
  findColumnWidth,
  transpose,
  minStartValue,
  maxHouseDistance,
  countCharacters2,
  MyHashSet,
  hammingWeight,
  applyOperations,
  findWordsContaining,
  trimMean,
  findMiddleIndex,
  shiftGrid,
  findTheDistanceValue,
  getRow,
  numberOfLines,
  findMaxK,
  checkArithmeticSubarrays,
  nearestValidPoint,
  findDiagonalOrder,
  answerQueries,
  arithmeticTriplets,
  arrReverse,
  backspaceCompare,
  balancedStringSplit,
  buildArray,
  canMakeArithmeticProgression,
  calculate,
  checkDistances,
  cellsInRange,
  checkIfPangram,
  checkPalindromeItr,
  checkPalindromeRec,
  commonChars,
  countAsterisks,
  countCharacters,
  countHomogenous,
  countPalindromicSubsequence,
  countPairs,
  countSeniors,
  countStudents,
  deleteGreatestValue,
  distinctDifferenceArray,
  eliminateMaximum,
  emojiArtGenerator,
  evenOddNumber,
  interpret,
  isAcronym,
  isSequence,
  isValid,
  islandPerimeter,
  isToeplitzMatrix,
  intersection,
  findTheArrayConcVal,
  findDifferentBinaryString,
  findDifference,
  findMaxDiff,
  findMode,
  finalString,
  findNonMinOrMax,
  findChampion,
  frequencySort,
  getMinimumDifference,
  knightProbability,
  largestValues,
  leftRightDifference,
  longestPalindrome,
  maxMinElements,
  maximumElementAfterDecrementingAndRearranging,
  maximizeSum,
  maximumNumberOfStringPairs,
  maxFrequency,
  maximumValue,
  maximumCount,
  maximumStrongPairXor,
  mergeSimilarItems,
  mergeArrays,
  minimumOperations,
  minPairSum,
  numberOfEmployeesWhoMetTarget,
  numberOfPairs,
  partitionString,
  removeDuplicates,
  removeOuterParentheses,
  relativeSortArray,
  restoreArray,
  romanToInt,
  rowAndMaximumOnes,
  twoSum,
  unequalTriplets,
  SeatManager,
  separateDigits,
  similarPairs,
  sumOfEvens,
  sumOfSquares,
  sumCounts,
  sumIndicesWithKSetBits,
  sortByBits,
  sortPeople,
  sortSentence,
  sortVowels,
  mergeTrees,
  vowelStrings,
};
