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

export default {
  longestCommonSubsequence,
  maxAscendingSum,
};
