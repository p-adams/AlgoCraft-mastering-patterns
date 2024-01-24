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

export default {
  maxAscendingSum,
};
