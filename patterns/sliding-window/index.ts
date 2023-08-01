function longestSubstring(str: string): number {
  let start = 0;
  let max = 0;
  const map: { [key: string]: number } = {};

  for (const [index, el] of str.split("").entries()) {
    const curr = map[el];
    if (curr !== undefined && curr >= start) {
      start = curr + 1;
    }
    map[el] = index;
    max = Math.max(max, index - start + 1);
  }

  return max;
}

export { longestSubstring };
