function containerWithMostWater(input: number[]): number {
  let left = 0;
  let right = input.length - 1;
  let maxArea = 0;

  while (left < right) {
    const height = Math.min(input[left], input[right]);
    const width = right - left;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (input[left] < input[right]) {
      left++;
    } else {
      right--;
    }
  }

  return maxArea;
}

export { containerWithMostWater };
