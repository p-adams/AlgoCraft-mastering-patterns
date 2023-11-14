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

export {
  answerQueries,
  arithmeticTriplets,
  arrReverse,
  backspaceCompare,
  balancedStringSplit,
  buildArray,
  calculate,
  cellsInRange,
  checkIfPangram,
  checkPalindromeItr,
  checkPalindromeRec,
  countAsterisks,
  countCharacters,
  countHomogenous,
  countPalindromicSubsequence,
  countPairs,
  countSeniors,
  deleteGreatestValue,
  distinctDifferenceArray,
  eliminateMaximum,
  emojiArtGenerator,
  evenOddNumber,
  interpret,
  isAcronym,
  isSequence,
  isValid,
  intersection,
  findDifference,
  findMaxDiff,
  findMode,
  finalString,
  findNonMinOrMax,
  getMinimumDifference,
  knightProbability,
  largestValues,
  leftRightDifference,
  longestPalindrome,
  maxMinElements,
  maximizeSum,
  maximumNumberOfStringPairs,
  maximumValue,
  maximumCount,
  maximumStrongPairXor,
  mergeSimilarItems,
  mergeArrays,
  minimumOperations,
  numberOfEmployeesWhoMetTarget,
  numberOfPairs,
  partitionString,
  removeDuplicates,
  removeOuterParentheses,
  restoreArray,
  romanToInt,
  rowAndMaximumOnes,
  twoSum,
  unequalTriplets,
  SeatManager,
  separateDigits,
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
