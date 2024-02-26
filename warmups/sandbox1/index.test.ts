import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import Sandbox1 from "./index.ts";
import { NumArray, TreeNode } from "../models.ts";
Deno.test("#maxAscendingSum", () => {
  assertEquals(Sandbox1.maxAscendingSum([10, 20, 30, 5, 10, 50]), 65);
});
Deno.test("#Range Sum Query", () => {
  const obj = new NumArray([-2, 0, 3, -5, 2, -1]);
  assertEquals(obj.sumRange(0, 2), 1);
  assertEquals(obj.sumRange(2, 5), -1);
  assertEquals(obj.sumRange(0, 5), -3);
});

Deno.test("#longestCommonSubsequence", () => {
  assertEquals(Sandbox1.longestCommonSubsequence("abcde", "ace"), 3);
});

Deno.test("#arrayRankTransform", () => {
  assertEquals(Sandbox1.arrayRankTransform([40, 10, 20, 30]), [4, 1, 2, 3]);
});

Deno.test("#isMonotonic", () => {
  assertEquals(Sandbox1.isMonotonic([1, 2, 2, 3]), true);
  assertEquals(Sandbox1.isMonotonic([6, 5, 4, 4]), true);
  assertEquals(Sandbox1.isMonotonic([1, 3, 2]), false);
});

Deno.test("#evalRPN", () => {
  assertEquals(Sandbox1.evalRPN(["2", "1", "+", "3", "*"]), 9);
  assertEquals(Sandbox1.evalRPN(["4", "13", "5", "/", "+"]), 6);
  assertEquals(
    Sandbox1.evalRPN([
      "10",
      "6",
      "9",
      "3",
      "+",
      "-11",
      "*",
      "/",
      "*",
      "17",
      "+",
      "5",
      "+",
    ]),
    22
  );
});

Deno.test("#dailyTemperatures", () => {
  assertEquals(
    Sandbox1.dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]),
    [1, 1, 4, 2, 1, 1, 0, 0]
  );
});

Deno.test("#sequentialDigits", () => {
  assertEquals(Sandbox1.sequentialDigits(100, 300), [123, 234]);
});

Deno.test("#minimumCost", () => {
  assertEquals(Sandbox1.minimumCost([1, 2, 3]), 5);
});

Deno.test("#countQuadruplets", () => {
  assertEquals(Sandbox1.countQuadruplets([1, 2, 3, 6]), 1);
  assertEquals(Sandbox1.countQuadruplets([3, 3, 6, 4, 5]), 0);
  assertEquals(Sandbox1.countQuadruplets([1, 1, 1, 3, 5]), 4);
});

Deno.test("#bestHand", () => {
  assertEquals(
    Sandbox1.bestHand([13, 2, 3, 1, 9], ["a", "a", "a", "a", "a"]),
    "Flush"
  );
  assertEquals(
    Sandbox1.bestHand([4, 4, 2, 4, 4], ["d", "a", "a", "b", "c"]),
    "Three of a Kind"
  );
  assertEquals(
    Sandbox1.bestHand([10, 10, 2, 12, 9], ["a", "b", "c", "a", "d"]),
    "Pair"
  );
});

Deno.test("#maximumPopulation", () => {
  assertEquals(
    Sandbox1.maximumPopulation([
      [1993, 1999],
      [2000, 2010],
    ]),
    1993
  );
});

Deno.test("#construct2DArray", () => {
  assertEquals(Sandbox1.construct2DArray([1, 2, 3, 4], 2, 2), [
    [1, 2],
    [3, 4],
  ]);
});

Deno.test("#frequencySortStr", () => {
  assertEquals(Sandbox1.frequencySortStr("tree"), "eert");
  assertEquals(Sandbox1.frequencySortStr("cccaaa"), "aaaccc");
});

Deno.test("#maxDepth", () => {
  assertEquals(Sandbox1.maxDepth("(1+(2*3)+((8)/4))+1"), 3);
});

Deno.test("#replaceDigits", () => {
  assertEquals(Sandbox1.replaceDigits("a1c1e1"), "abcdef");
});

Deno.test("#findLeastNumOfUniqueInts", () => {
  assertEquals(Sandbox1.findLeastNumOfUniqueInts([5, 5, 4], 1), 1);
});

Deno.test("#countPoints", () => {
  assertEquals(Sandbox1.countPoints("B0B6G0R6R0R6G9"), 1);
});

Deno.test("#makeSmallestPalindrome", () => {
  assertEquals(Sandbox1.makeSmallestPalindrome("egcfe"), "efcfe");
  assertEquals(Sandbox1.makeSmallestPalindrome("abcd"), "abba");
  assertEquals(Sandbox1.makeSmallestPalindrome("seven"), "neven");
});

Deno.test("#numOfStrings", () => {
  assertEquals(Sandbox1.numOfStrings(["a", "abc", "bc", "d"], "abc"), 3);
  assertEquals(Sandbox1.numOfStrings(["a", "b", "c"], "aaaaabbbbb"), 2);
  assertEquals(Sandbox1.numOfStrings(["a", "a", "a"], "ab"), 3);
});

Deno.test("#reversePrefix", () => {
  assertEquals(Sandbox1.reversePrefix("abcdefd", "d"), "dcbaefd");
});

Deno.test("#freqAlphabets", () => {
  assertEquals(Sandbox1.freqAlphabets("10#11#12"), "jkab");
  assertEquals(Sandbox1.freqAlphabets("1326#"), "acz");
});

Deno.test("#isPowerTwo", () => {
  assertEquals(Sandbox1.isPowerOfTwo(1), true);
  assertEquals(Sandbox1.isPowerOfTwo(16), true);
  assertEquals(Sandbox1.isPowerOfTwo(1), true);
});

Deno.test("#countKeyChanges", () => {
  assertEquals(Sandbox1.countKeyChanges("aAbBcC"), 2);
  assertEquals(Sandbox1.countKeyChanges("AaAaAaaA"), 0);
});

Deno.test("#missingNumber", () => {
  assertEquals(Sandbox1.missingNumber([3, 0, 1]), 2);
});

Deno.test("#halvesAreAlike", () => {
  assertEquals(Sandbox1.halvesAreAlike("book"), true);
  assertEquals(Sandbox1.halvesAreAlike("textbook"), false);
});

Deno.test("#findJudge", () => {
  assertEquals(Sandbox1.findJudge(2, [[1, 2]]), 2);
});

Deno.test("#findCheapestPrice", () => {
  assertEquals(
    Sandbox1.findCheapestPrice(
      4,
      [
        [0, 1, 100],
        [1, 2, 100],
        [2, 0, 100],
        [1, 3, 600],
        [2, 3, 200],
      ],
      0,
      3,
      1
    ),
    700
  );
});

Deno.test("#removeTrailingZeros", () => {
  assertEquals(Sandbox1.removeTrailingZeros("51230100"), "512301");
  assertEquals(Sandbox1.removeTrailingZeros("123"), "123");
});

Deno.test("#squareIsWhite", () => {
  assertEquals(Sandbox1.squareIsWhite("a1"), true);
});

Deno.test("#generateTheString", () => {
  assertEquals(Sandbox1.generateTheString(4), "aaab");
});

Deno.test("#isSameTree", () => {
  const p = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  const q = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  assertEquals(Sandbox1.isSameTree(p, q), true);
});
