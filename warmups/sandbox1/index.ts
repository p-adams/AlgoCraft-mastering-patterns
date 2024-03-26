import { ListNode } from "../models.ts";
import { TreeNode } from "../models.ts";
import { numSpecial } from "../sandbox0/index.ts";

function maxAscendingSum(nums: number[]): number {
  const n = nums.length;
  let maxSum = 0;

  for (let start = 0; start < n; start++) {
    let end = start;

    // Extend the subarray while it remains ascending
    while (end + 1 < n && nums[end] < nums[end + 1]) {
      end++;
    }

    // Calculate the sum of the ascending subarray
    const sum = nums.slice(start, end + 1).reduce((acc, num) => acc + num, 0);

    // Update the maximum sum
    maxSum = Math.max(maxSum, sum);

    // Move the start index to the next possible subarray
    start = end;
  }

  return maxSum;
}

function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length;
  const n = text2.length;

  // Create a 2D array to store the lengths of common subsequences
  const dp: number[][] = Array.from({ length: m + 1 }, () =>
    Array(n + 1).fill(0)
  );

  // Iterate through the strings to fill the dp array
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // If characters match, increment the length of the common subsequence
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // If characters don't match, take the maximum length from the adjacent cells
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Return the length of the longest common subsequence
  return dp[m][n];
}

function arrayRankTransform(arr: number[]): number[] {
  // Create a sorted copy of the array
  const sortedArr = [...arr].sort((a, b) => a - b);

  // Create a map to store the rank of each unique element
  const rankMap = new Map<number, number>();

  // Assign ranks to unique elements based on their position in the sorted array
  let rank = 1;
  for (const num of sortedArr) {
    if (!rankMap.has(num)) {
      rankMap.set(num, rank++);
    }
  }

  // Replace each element in the original array with its rank
  const result = arr.map((num) => rankMap.get(num)!);

  return result;
}

function isMonotonic(nums: number[]): boolean {
  let increasing = true;
  let decreasing = true;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      decreasing = false; // If current element is greater than previous, not decreasing
    } else if (nums[i] < nums[i - 1]) {
      increasing = false; // If current element is less than previous, not increasing
    }

    // If neither increasing nor decreasing, array is not monotonic
    if (!increasing && !decreasing) {
      return false;
    }
  }

  // If either increasing or decreasing is true, array is monotonic
  return true;
}

function evalRPN(tokens: string[]): number {
  const ops = ["+", "-", "*", "/"];
  const seen = [];
  for (const token of tokens) {
    if (!ops.includes(token)) {
      seen.push(token);
    } else {
      const b = seen.pop();
      const a = seen.pop();
      let res = 0;
      switch (token) {
        case "+":
          res = Number(a) + Number(b);
          break;
        case "-":
          res = Number(a) - Number(b);
          break;
        case "*":
          res = Number(a) * Number(b);
          break;
        case "/":
          res = Math.trunc(Number(a) / Number(b));
          break;
        default:
          break;
      }
      seen.push(res);
    }
  }
  const lst = seen.pop();
  return Math.floor(Number(lst));
}

function dailyTemperatures(temperatures: number[]): number[] {
  const n = temperatures.length;
  const stack: number[] = [];
  const result: number[] = Array(n).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    while (
      stack.length > 0 &&
      temperatures[i] >= temperatures[stack[stack.length - 1]]
    ) {
      stack.pop();
    }

    if (stack.length > 0) {
      result[i] = stack[stack.length - 1] - i;
    }

    stack.push(i);
  }

  return result;
}

function sequentialDigits(low: number, high: number): number[] {
  const result: number[] = [];
  const digits = "123456789";

  for (
    let length = low.toString().length;
    length <= high.toString().length;
    length++
  ) {
    for (let start = 0; start < 10 - length; start++) {
      const num = parseInt(digits.substr(start, length));
      if (num >= low && num <= high) {
        result.push(num);
      }
    }
  }

  return result;
}

function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);
  let out = 0;
  let sum = 0;
  for (let i = 0; i < cost.length; i++) {
    sum += cost[i];
  }
  for (let i = 2; i < cost.length; i += 3) {
    out += cost[i];
  }
  return sum - out;
}

function countQuadruplets(nums: number[]): number {
  let count = 0;
  for (let a = 0; a < nums.length; a++) {
    for (let b = 1; b < nums.length; b++) {
      for (let c = 2; c < nums.length; c++) {
        for (let d = 3; d < nums.length; d++) {
          if (
            nums[a] + nums[b] + nums[c] === nums[d] &&
            a < b &&
            b < c &&
            c < d
          )
            ++count;
        }
      }
    }
  }
  return count;
}

function bestHand(ranks: number[], suits: string[]): string {
  const hand = ranks.map((rank, index) => ({ rank, suit: suits[index] }));
  hand.sort((a, b) => a.rank - b.rank);
  function isFlush(hand: { rank: number; suit: string }[]): boolean {
    return hand.every((card) => card.suit === hand[0].suit);
  }

  function isThreeOfAKind(hand: { rank: number; suit: string }[]): boolean {
    for (let i = 0; i <= hand.length - 3; i++) {
      if (
        hand[i].rank === hand[i + 1].rank &&
        hand[i + 1].rank === hand[i + 2].rank
      ) {
        return true;
      }
    }
    return false;
  }

  function isPair(hand: { rank: number; suit: string }[]): boolean {
    for (let i = 0; i <= hand.length - 2; i++) {
      if (hand[i].rank === hand[i + 1].rank) {
        return true;
      }
    }
    return false;
  }
  if (isFlush(hand)) {
    return "Flush";
  } else if (isThreeOfAKind(hand)) {
    return "Three of a Kind";
  } else if (isPair(hand)) {
    return "Pair";
  } else {
    return "High Card";
  }
}

function maximumPopulation(logs: number[][]): number {
  const years = new Array(101).fill(0); // Array to store population count for each year from 1950 to 2050

  // Iterate through each person's birth and death years
  for (const [birth, death] of logs) {
    for (let year = birth; year < death; year++) {
      years[year - 1950]++; // Increment population count for the corresponding year
    }
  }

  let maxPopulation = 0;
  let maxYear = 1950;

  // Find the year with the maximum population
  for (let year = 1950; year <= 2050; year++) {
    if (years[year - 1950] > maxPopulation) {
      maxPopulation = years[year - 1950];
      maxYear = year;
    }
  }

  return maxYear;
}

function construct2DArray(
  original: number[],
  m: number,
  n: number
): number[][] {
  if (m * n !== original.length) {
    return [];
  }

  return Array.from({ length: m }, (_, index) =>
    original.slice(index * n, index * n + n)
  );
}

function frequencySortStr(s: string): string {
  const charMap = new Map<string, number>();

  // Count frequencies of each character
  for (const char of s) {
    charMap.set(char, (charMap.get(char) || 0) + 1);
  }

  // Sort characters by frequency in descending order
  const sortedChars = [...charMap].sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1]; // Sort by frequency in descending order
    } else {
      return a[0].localeCompare(b[0]); // Sort alphabetically for characters with the same frequency
    }
  });

  // Construct the sorted string
  let result = "";
  for (const [char, count] of sortedChars) {
    result += char.repeat(count);
  }

  return result;
}

function maxDepth(s: string): number {
  let depth = 0;
  let maxDepth = 0;

  for (const char of s) {
    if (char === "(") {
      depth++;
      maxDepth = Math.max(maxDepth, depth);
    } else if (char === ")") {
      depth--;
    }
  }

  return maxDepth;
}

function replaceDigits(s: string): string {
  function shift(ch: string, digit: number): string {
    const startCharCode = ch.charCodeAt(0);
    const shiftedCharCode = startCharCode + digit;
    return String.fromCharCode(shiftedCharCode);
  }

  let result = "";
  for (let index = 1; index < s.length; index += 2) {
    const prevChar = s[index - 1];
    const digit = parseInt(s[index], 10);
    if (!isNaN(digit)) {
      const shiftedChar = shift(prevChar, digit);
      result += prevChar + shiftedChar;
    } else {
      result += prevChar + s[index];
    }
  }
  // Handle the case when the string length is odd
  if (s.length % 2 !== 0) {
    result += s[s.length - 1];
  }
  return result;
}

function findLeastNumOfUniqueInts(arr: number[], k: number): number {
  const frequencyMap: Map<number, number> = new Map();

  // Count the frequency of each integer in the array
  for (const num of arr) {
    frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
  }

  // Sort unique integers based on their frequencies
  const sortedFrequencies = Array.from(frequencyMap.values()).sort(
    (a, b) => a - b
  );

  let numUniqueIntegers = frequencyMap.size;
  let remainingRemovals = k;

  // Remove integers with the lowest frequencies until k removals are done
  for (const frequency of sortedFrequencies) {
    if (remainingRemovals >= frequency) {
      remainingRemovals -= frequency;
      numUniqueIntegers--;
    } else {
      break;
    }
  }

  return numUniqueIntegers;
}

function countPoints(rings: string): number {
  const rods: Map<string, Set<string>> = new Map();

  // Iterate through each ring and store its color on the respective rod
  for (let i = 0; i < rings.length; i += 2) {
    const color = rings[i];
    const rod = rings[i + 1];
    if (!rods.has(rod)) {
      rods.set(rod, new Set());
    }
    rods.get(rod)?.add(color);
  }

  let count = 0;
  for (const colors of rods.values()) {
    // Check if a rod has all three colors
    if (colors.size === 3) {
      count++;
    }
  }

  return count;
}

function makeSmallestPalindrome(s: string): string {
  const $s = s.split("");
  for (let i = 0, j = $s.length - 1; i < j; i++, j--) {
    if ($s[i] !== $s[j]) {
      if ($s[i] < $s[j]) {
        $s[j] = $s[i];
      } else {
        $s[i] = $s[j];
      }
    }
  }
  return $s.join("");
}

function numOfStrings(patterns: string[], word: string): number {
  return patterns.filter((p) => word.includes(p)).length;
}

function reversePrefix(word: string, ch: string): string {
  const index = word.indexOf(ch) + 1;
  const prefix = word.slice(0, index).split("").reverse().join("");
  const rest = word.slice(index);
  return prefix.concat(rest);
}

function freqAlphabets(s: string): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const chMap = new Map<string, string>();

  // Construct the character mapping
  for (let i = 1; i <= 26; i++) {
    const letter = i <= 9 ? `${i}` : `${i}#`;
    chMap.set(letter, alphabet[i - 1]);
  }

  let res = "";
  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] === "#") {
      res = chMap.get(s.substring(i - 2, i + 1)) + res;
      i -= 3;
    } else {
      res = chMap.get(s[i]) + res;
      i--;
    }
  }

  return res;
}

function isPowerOfTwo(n: number): boolean {
  return n > 0 && (n & (n - 1)) === 0;
}

function countKeyChanges(s: string): number {
  const $s = s.split("").map((ch) => ch.toLowerCase());
  let c = 0;
  for (let index = 1; index < $s.length; index++) {
    const element = $s[index];
    const element2 = $s[index - 1];
    if (element !== element2) {
      ++c;
    }
  }
  return c;
}

function missingNumber(nums: number[]): number {
  const n = nums.length;
  const $nums = nums.sort((a, b) => a - b);
  const range = [];
  let mn = -1;
  for (let index = 0; index <= n; index++) {
    range.push(index);
  }
  for (let index = 0; index < range.length; index++) {
    if (index !== $nums[index]) {
      mn = index;
      break;
    }
  }
  return mn;
}

function halvesAreAlike(s: string): boolean {
  const n = s.length;
  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  const a = s
    .substring(0, n / 2)
    .split("")
    .filter((ch) => vowels.includes(ch));
  const b = s
    .substring(n / 2)
    .split("")
    .filter((ch) => vowels.includes(ch));

  return a.length === b.length;
}

function findJudge(n: number, trust: number[][]): number {
  const trusts = Array(n + 1).fill(0);
  const trustedBy = Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    trusts[a]++;
    trustedBy[b]++;
  }

  for (let i = 1; i <= n; i++) {
    if (trusts[i] === 0 && trustedBy[i] === n - 1) {
      return i;
    }
  }

  return -1;
}

function findCheapestPrice(
  n: number,
  flights: number[][],
  src: number,
  dst: number,
  k: number
): number {
  const adj: Map<number, [number, number][]> = new Map();
  const visited: number[] = new Array(n).fill(Number.MAX_VALUE);
  visited[src] = 0;

  for (const [from, to, price] of flights) {
    if (!adj.has(from)) {
      adj.set(from, []);
    }
    adj.get(from)!.push([to, price]);
  }

  const queue: [number, number][] = [[src, 0]];
  k++;

  while (k-- > 0 && queue.length > 0) {
    const size = queue.length;
    for (let i = 0; i < size; i++) {
      const [currNode, currPrice] = queue.shift()!;
      if (adj.has(currNode)) {
        for (const [nextNode, nextPrice] of adj.get(currNode)!) {
          const newPrice = currPrice + nextPrice;
          if (newPrice < visited[nextNode]) {
            visited[nextNode] = newPrice;
            queue.push([nextNode, newPrice]);
          }
        }
      }
    }
  }

  return visited[dst] === Number.MAX_VALUE ? -1 : visited[dst];
}

function removeTrailingZeros(num: string): string {
  return num.replace(/0+$/, "");
}

function squareIsWhite(coordinates: string): boolean {
  const [x, y] = coordinates.split("");
  const m: any = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
  };
  const $x = Number(m[x]);
  const $y = Number(y);

  return ($x + $y) % 2 !== 0 ? true : false;
}

function generateTheString(n: number): string {
  if (n % 2 === 1) {
    return String.fromCharCode(...new Array(n).fill(97));
  }

  return String.fromCharCode(...new Array(n - 1).fill(97), 98);
}

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  // If both trees are empty, they are considered the same
  if (p === null && q === null) {
    return true;
  }
  // If only one of the trees is empty, they are not the same
  if (p === null || q === null) {
    return false;
  }
  // If the values of the current nodes are not equal, they are not the same
  if (p.val !== q.val) {
    return false;
  }
  // Recursively check if the left subtrees and right subtrees are the same
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

function diameterOfBinaryTree(root: TreeNode | null): number {
  let diameter = 0;

  // Recursive function to calculate the depth of each node
  function depth(node: TreeNode | null): number {
    if (node === null) return 0;

    const leftDepth = depth(node.left);
    const rightDepth = depth(node.right);

    // Update diameter if necessary
    diameter = Math.max(diameter, leftDepth + rightDepth);

    // Return the depth of the current node
    return Math.max(leftDepth, rightDepth) + 1;
  }

  depth(root);

  return diameter;
}

function reverseString(s: string[]) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
}

function areOccurrencesEqual(s: string): boolean {
  const m = new Map<string, number>();
  for (const ch of s) {
    m.set(ch, m.get(ch) ? m.get(ch)! + 1 : 1);
  }
  const vals = Array.from(m.values());
  for (let index = 1; index < vals.length; index++) {
    if (vals[index - 1] !== vals[index]) {
      return false;
    }
  }

  return true;
}

function sortString(s: string): string {
  const charCount: number[] = Array(26).fill(0);

  // Count the frequency of each character in the input string
  for (const char of s) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    charCount[index]++;
  }

  let result = "";

  // Process characters from 'a' to 'z' and then from 'z' to 'a' repeatedly
  let processed = false;
  while (!processed) {
    processed = true;

    // Process characters from 'a' to 'z'
    for (let i = 0; i < 26; i++) {
      const char = String.fromCharCode("a".charCodeAt(0) + i);
      if (charCount[i] > 0) {
        result += char;
        charCount[i]--;
        processed = false;
      }
    }

    // Process characters from 'z' to 'a'
    for (let i = 25; i >= 0; i--) {
      const char = String.fromCharCode("a".charCodeAt(0) + i);
      if (charCount[i] > 0) {
        result += char;
        charCount[i]--;
        processed = false;
      }
    }
  }

  return result;
}

function removePalindromeSub(s: string): number {
  return s === s.split("").reverse().join("") ? 1 : 2;
}

function middleNode(head: ListNode | null): ListNode | null | undefined {
  if (!head) return null;

  let slow: ListNode | null = head;
  let fast: ListNode | null = head;

  // Move slow pointer one step at a time and fast pointer two steps at a time
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  return slow;
}

function getCommon(nums1: number[], nums2: number[]): number {
  let i = 0;
  let j = 0;
  let minCommon = Infinity;

  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      minCommon = Math.min(minCommon, nums1[i]);
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return minCommon === Infinity ? -1 : minCommon;
}

function customSortString(order: string, s: string): string {
  const frequencyMap = new Map<string, number>();

  // Step 1: Create a map to store the frequency of characters in the string s
  for (const char of s) {
    frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
  }

  let result = "";

  // Step 2: Iterate through each character in the order string
  for (const char of order) {
    // Step 3: If the character exists in the frequency map, append it to the result string
    if (frequencyMap.has(char)) {
      result += char.repeat(frequencyMap.get(char)!);
      frequencyMap.delete(char);
    }
  }

  // Step 4: Append any remaining characters (not in the order string) to the result string
  for (const [char, count] of frequencyMap.entries()) {
    result += char.repeat(count);
  }

  // Step 5: Return the result string
  return result;
}

function judgeCircle(moves: string): boolean {
  const path = { x: 0, y: 0 };
  for (const move of moves) {
    switch (move) {
      case "R":
        path.x++;
        break;
      case "L":
        path.x--;
        break;
      case "U":
        path.y--;
        break;
      case "D":
        path.y++;
        break;
      default:
        break;
    }
  }
  return path.x === 0 && path.y === 0;
}

function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  let i = 0;

  // Add intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // Merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }
  result.push(newInterval);

  // Add intervals after newInterval
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

function minTimeToType(word: string): number {
  let currentTime = 0;
  let currentChar = "a";

  for (let i = 0; i < word.length; i++) {
    const targetChar = word[i];

    // Calculate clockwise and counterclockwise distances
    const clockwiseDistance = Math.abs(
      targetChar.charCodeAt(0) - currentChar.charCodeAt(0)
    );
    const counterclockwiseDistance = 26 - clockwiseDistance;

    // Update currentTime
    currentTime += Math.min(clockwiseDistance, counterclockwiseDistance) + 1;

    // Update currentChar
    currentChar = targetChar;
  }

  return currentTime;
}

function leastInterval(tasks: string[], n: number): number {
  const taskCountMap: Map<string, number> = new Map();

  // Count the frequency of each task
  for (const task of tasks) {
    taskCountMap.set(task, (taskCountMap.get(task) || 0) + 1);
  }

  // Sort tasks based on their frequency in descending order
  const sortedTasks = Array.from(taskCountMap.values()).sort((a, b) => b - a);

  // Get the frequency of the most frequent task
  const maxFrequency = sortedTasks[0];

  // Count how many tasks have the same maximum frequency
  let maxCount = 0;
  for (const frequency of sortedTasks) {
    if (frequency === maxFrequency) {
      maxCount++;
    } else {
      break;
    }
  }

  // Calculate the total number of intervals required
  const totalIntervals = (maxFrequency - 1) * (n + 1) + maxCount;

  // Return the maximum of totalIntervals and the length of the tasks array
  return Math.max(totalIntervals, tasks.length);
}

function minOperations(nums: number[], k: number): number {
  return nums.reduce((acc, curr) => (curr < k ? ++acc : acc), 0);
}

function reverseList(head: ListNode | null): ListNode | null {
  // Base case: If head is null or head is the last node
  if (!head || !head.next) {
    return head;
  }

  // Recursively reverse the sublist starting from head.next
  const reversedList = reverseList(head.next);

  // Reverse the pointer of head.next to point back to head
  head.next.next = head;

  // Set head's next pointer to null to avoid cycles
  head.next = null;

  // Return the new head of the reversed list
  return reversedList;
}

function isLinkedListPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) {
    return true; // Empty list or single node is considered palindrome
  }

  // Use slow and fast pointers to find the middle of the list
  let slow: ListNode | null = head;
  let fast: ListNode | null = head;
  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // Reverse the second half of the list
  let secondHalfReversed = reverseList(slow);

  // Compare the first half with the reversed second half
  let firstHalf = head;
  while (firstHalf && secondHalfReversed) {
    if (firstHalf.val !== secondHalfReversed.val) {
      return false; // Nodes don't match, not a palindrome
    }
    firstHalf = firstHalf.next!;
    secondHalfReversed = secondHalfReversed.next;
  }

  return true;
}

function isSumEqual(
  firstWord: string,
  secondWord: string,
  targetWord: string
): boolean {
  function getNumericalValue(word: string): number {
    let numericalValue = "";
    for (const letter of word) {
      numericalValue += (letter.charCodeAt(0) - "a".charCodeAt(0)).toString();
    }
    return parseInt(numericalValue);
  }

  const numericalValueFirstWord = getNumericalValue(firstWord);
  const numericalValueSecondWord = getNumericalValue(secondWord);
  const numericalValueTargetWord = getNumericalValue(targetWord);

  return (
    numericalValueFirstWord + numericalValueSecondWord ===
    numericalValueTargetWord
  );
}

function findDuplicate(nums: number[]): number {
  const m = new Map();
  for (const iterator of nums) {
    m.set(iterator, (m.get(iterator) || 0) + 1);
  }
  let res = -1;
  for (const [k, v] of m) {
    if (v > 1) {
      res = k;
    }
  }
  return res;
}

function findDuplicates(nums: number[]): number[] {
  const m = new Map();
  for (const iterator of nums) {
    m.set(iterator, (m.get(iterator) || 0) + 1);
  }
  const res = [];
  for (const [k, v] of m) {
    if (v === 2) {
      res.push(k);
    }
  }
  return res;
}

function percentageLetter(s: string, letter: string): number {
  const len = s.length;
  const m = new Map();
  for (const iterator of s) {
    m.set(iterator, (m.get(iterator) || 0) + 1);
  }
  let res = 0;
  for (const [k, v] of m) {
    if (k === letter) {
      res = (v / len) * 100;
    }
  }
  return Math.floor(res);
}

function minimumSum(num: number): number {
  const sorted = String(num)
    .split("")
    .sort((a, b) => +a - +b);

  return (
    Number(`${sorted[0]}${sorted[2]}`) + Number(`${sorted[1]}${sorted[3]}`)
  );
}

export default {
  minimumSum,
  percentageLetter,
  findDuplicates,
  findDuplicate,
  isSumEqual,
  isLinkedListPalindrome,
  reverseList,
  minOperations,
  leastInterval,
  minTimeToType,
  insert,
  judgeCircle,
  customSortString,
  getCommon,
  middleNode,
  removePalindromeSub,
  sortString,
  areOccurrencesEqual,
  reverseString,
  diameterOfBinaryTree,
  isSameTree,
  generateTheString,
  squareIsWhite,
  removeTrailingZeros,
  findCheapestPrice,
  findJudge,
  halvesAreAlike,
  missingNumber,
  countKeyChanges,
  isPowerOfTwo,
  freqAlphabets,
  reversePrefix,
  numOfStrings,
  makeSmallestPalindrome,
  countPoints,
  findLeastNumOfUniqueInts,
  replaceDigits,
  maxDepth,
  frequencySortStr,
  construct2DArray,
  maximumPopulation,
  bestHand,
  countQuadruplets,
  minimumCost,
  sequentialDigits,
  dailyTemperatures,
  evalRPN,
  isMonotonic,
  arrayRankTransform,
  longestCommonSubsequence,
  maxAscendingSum,
};
