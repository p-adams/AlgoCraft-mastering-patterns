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

function minWindowSubstring(s: string, t: string): string {
  const frequencyMap = new Map<string, number>();

  // Prepare the frequency map for characters in 't'.
  for (const ch of t) {
    frequencyMap.set(ch, (frequencyMap.get(ch) ?? 0) + 1);
  }

  let left = 0;
  let right = 0;
  let requiredCharacters = frequencyMap.size;
  let minLength = Infinity;
  let minWindowStart = 0;

  while (right < s.length) {
    const currentChar = s[right];

    if (frequencyMap.has(currentChar)) {
      frequencyMap.set(currentChar, frequencyMap.get(currentChar)! - 1);
      if (frequencyMap.get(currentChar) === 0) {
        requiredCharacters--;
      }
    }

    while (requiredCharacters === 0) {
      // Update 'minLength' and 'minWindowStart' if the current window is smaller.
      if (right - left + 1 < minLength) {
        minLength = right - left + 1;
        minWindowStart = left;
      }

      const leftChar = s[left];
      if (frequencyMap.has(leftChar)) {
        frequencyMap.set(leftChar, frequencyMap.get(leftChar)! + 1);
        if (frequencyMap.get(leftChar) === 1) {
          requiredCharacters++;
        }
      }

      left++;
    }

    right++;
  }

  return minLength === Infinity
    ? ""
    : s.substring(minWindowStart, minWindowStart + minLength);
}

export { longestSubstring, minWindowSubstring };
