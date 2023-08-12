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

// Given an array nums and a value val,
// remove all instances of that value in-place and return the new length.
function removeElement(input: number[], val: number) {
  let slow = 0;

  for (let fast = 0; fast < input.length; fast++) {
    const element = input[fast];
    if (element !== val) {
      input[slow] = element;
      slow++;
    }
  }
  return slow;
}

export { containerWithMostWater, removeElement };
