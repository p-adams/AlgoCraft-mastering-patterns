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

export { arrReverse, maxMinElements, removeDuplicates };
