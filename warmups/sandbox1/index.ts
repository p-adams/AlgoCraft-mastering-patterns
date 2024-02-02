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

export default {
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
