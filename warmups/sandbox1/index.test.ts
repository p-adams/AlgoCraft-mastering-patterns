import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import Sandbox1 from "./index.ts";
import { NumArray, TreeNode, ListNode } from "../models.ts";
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

Deno.test("#diameterOfBinaryTree", () => {
  const root = new TreeNode(
    1,
    new TreeNode(2, new TreeNode(4), new TreeNode(5)),
    new TreeNode(3)
  );
  assertEquals(Sandbox1.diameterOfBinaryTree(root), 3);
});

Deno.test("#reverseString", () => {
  const s = ["h", "e", "l", "l", "o"];
  Sandbox1.reverseString(s);
  assertEquals(s, ["o", "l", "l", "e", "h"]);
});

Deno.test("#areOccurrencesEqual", () => {
  assertEquals(Sandbox1.areOccurrencesEqual("abacbc"), true);
  assertEquals(Sandbox1.areOccurrencesEqual("aaabb"), false);
});

Deno.test("#sortString", () => {
  assertEquals(Sandbox1.sortString("aaaabbbbcccc"), "abccbaabccba");
});

Deno.test("#removePalindromeSub", () => {
  assertEquals(Sandbox1.removePalindromeSub("ababa"), 1);
});

Deno.test("#middleNode", () => {
  const nn = new ListNode(5, null);
  const nn1 = new ListNode(4, nn);
  const nn2 = new ListNode(3, nn1);
  const nn3 = new ListNode(2, nn2);
  const head = new ListNode(1, nn3);
  const mid = Sandbox1.middleNode(head);
  assertEquals(mid?.val, 3);
});

Deno.test("#getCommon", () => {
  assertEquals(Sandbox1.getCommon([1, 2, 3], [2, 4]), 2);
});

Deno.test("#customSortString", () => {
  assertEquals(Sandbox1.customSortString("cba", "abcd"), "cbad");
});

Deno.test("#judgeCircle", () => {
  assertEquals(Sandbox1.judgeCircle("UD"), true);
  assertEquals(Sandbox1.judgeCircle("LL"), false);
});

Deno.test("#insert", () => {
  assertEquals(
    Sandbox1.insert(
      [
        [1, 3],
        [6, 9],
      ],
      [2, 5]
    ),
    [
      [1, 5],
      [6, 9],
    ]
  );
});

Deno.test("#minTimeToType", () => {
  assertEquals(Sandbox1.minTimeToType("abc"), 5);
});

Deno.test("#leastInterval", () => {
  assertEquals(Sandbox1.leastInterval(["A", "A", "A", "B", "B", "B"], 2), 8);
});

Deno.test("#minOperations", () => {
  assertEquals(Sandbox1.minOperations([2, 11, 10, 1, 3], 10), 3);
});

Deno.test("#reverseList", () => {
  const nn = new ListNode(5, null);
  const nn1 = new ListNode(4, nn);
  const nn2 = new ListNode(3, nn1);
  const nn3 = new ListNode(2, nn2);
  const head = new ListNode(1, nn3);
  assertEquals(Sandbox1.reverseList(head)?.val, 5);
});

Deno.test("#isLinkedListPalindrome", () => {
  const nn = new ListNode(1, null);
  const nn1 = new ListNode(2, nn);
  const nn2 = new ListNode(2, nn1);
  const head = new ListNode(1, nn2);

  assertEquals(Sandbox1.isLinkedListPalindrome(head), true);
});

Deno.test("#isSumEqual", () => {
  assertEquals(Sandbox1.isSumEqual("acb", "cba", "cdb"), true);
});

Deno.test("#findDuplicate", () => {
  assertEquals(Sandbox1.findDuplicate([1, 3, 4, 2, 2]), 2);
  assertEquals(Sandbox1.findDuplicate([3, 1, 3, 4, 2]), 3);
});

Deno.test("#findDuplicates", () => {
  assertEquals(Sandbox1.findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]), [3, 2]);
});

Deno.test("#percentageLetter", () => {
  assertEquals(Sandbox1.percentageLetter("foobar", "o"), 33);
  assertEquals(Sandbox1.percentageLetter("jjjj", "k"), 0);
});

Deno.test("#minimumSum", () => {
  assertEquals(Sandbox1.minimumSum(2932), 52);
});

Deno.test("#numSubarrayProductLessThanK", () => {
  assertEquals(Sandbox1.numSubarrayProductLessThanK([10, 5, 2, 6], 100), 8);
});

Deno.test("#maxSubarrayLength", () => {
  assertEquals(Sandbox1.maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2), 6);
});

Deno.test("#lengthOfLastWord", () => {
  assertEquals(Sandbox1.lengthOfLastWord("Hello world   "), 5);
});

Deno.test("#exist", () => {
  assertEquals(
    Sandbox1.exist(
      [
        ["A", "B", "C", "E"],
        ["S", "F", "C", "S"],
        ["A", "D", "E", "E"],
      ],
      "ABCCED"
    ),
    true
  );
});

Deno.test("#makeGood", () => {
  assertEquals(Sandbox1.makeGood("leEeetcode"), "leetcode");
});

Deno.test("#repeatedCharacter", () => {
  assertEquals(Sandbox1.repeatedCharacter("abccbaacz"), "c");
});

Deno.test("#canBeTypedWords", () => {
  assertEquals(Sandbox1.canBeTypedWords("hello world", "ad"), 1);
  assertEquals(Sandbox1.canBeTypedWords("leet code", "lt"), 1);
});

Deno.test("#digitCount", () => {
  assertEquals(Sandbox1.digitCount("1210"), true);
  assertEquals(Sandbox1.digitCount("030"), false);
});

Deno.test("#fizzBuzz", () => {
  assertEquals(Sandbox1.fizzBuzz(3), ["1", "2", "Fizz"]);
});

Deno.test("#sumOfLeftLeaves", () => {
  const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(20, new TreeNode(15), new TreeNode(7))
  );
  assertEquals(Sandbox1.sumOfLeftLeaves(root), 24);
});

Deno.test("#sumNumbers", () => {
  const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));
  assertEquals(Sandbox1.sumNumbers(root), 25);
});

Deno.test("#greatestLetter", () => {
  assertEquals(Sandbox1.greatestLetter("lEeTcOdE"), "E");
  assertEquals(Sandbox1.greatestLetter("arRAzFif"), "R");
  assertEquals(Sandbox1.greatestLetter("AbCdEfGhIjK"), "");
});

Deno.test("#sumOfEncryptedInt", () => {
  assertEquals(Sandbox1.sumOfEncryptedInt([1, 2, 3]), 6);
});

Deno.test("#scoreOfStrings", () => {
  assertEquals(Sandbox1.scoreOfStrings("hello"), 13);
});

Deno.test("#checkString", () => {
  assertEquals(Sandbox1.checkString("aaabbb"), true);
  assertEquals(Sandbox1.checkString("abab"), false);
});
