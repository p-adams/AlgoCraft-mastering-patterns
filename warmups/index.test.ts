import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import {
  arrReverse,
  checkPalindromeRec,
  checkPalindromeItr,
  findMaxDiff,
  maxMinElements,
  mergeTrees,
  removeDuplicates,
  twoSum,
  sumOfEvens,
  emojiArtGenerator,
  evenOddNumber,
  countCharacters,
  arithmeticTriplets,
  TreeNode,
  knightProbability,
  isSequence,
  isValid,
  largestValues,
  numberOfEmployeesWhoMetTarget,
  interpret,
  countPairs,
  getMinimumDifference,
  balancedStringSplit,
  cellsInRange,
  longestPalindrome,
  backspaceCompare,
} from "./index.ts";

Deno.test("#maxMinElements", () => {
  assertEquals([5, 1], maxMinElements([1, 2, 3, 4, 5]));
  assertEquals([10, -2], maxMinElements([10, -2, 5, 7]));
  assertEquals([-Infinity, Infinity], maxMinElements([]));
});

Deno.test("#removeDuplicates", () => {
  assertEquals([1, 2, 3, 4, 5], removeDuplicates([1, 1, 2, 3, 3, 4, 4, 4, 5]));
});

Deno.test("#arrReverse", () => {
  assertEquals([3, 2, 1], arrReverse([1, 2, 3]));
  assertEquals([1, 33, 3, -2, 10], arrReverse([10, -2, 3, 33, 1]));
});

Deno.test("#findMax", () => {
  assertEquals(5, findMaxDiff([7, 1, 5, 3, 6, 4]));
  assertEquals(0, findMaxDiff([7]));
});

Deno.test("#checkPalindrome", () => {
  assertEquals(true, checkPalindromeItr("radar"));
  assertEquals(false, checkPalindromeItr("store"));
  assertEquals(true, checkPalindromeItr("level"));
  assertEquals(true, checkPalindromeRec("radar"));
  assertEquals(false, checkPalindromeRec("store"));
  assertEquals(true, checkPalindromeRec("level"));
});

Deno.test("#twoSum", () => {
  assertEquals([0, 1], twoSum([2, 7, 11, 15], 9));
});

Deno.test("#sumOfEvens", () => {
  assertEquals(2, sumOfEvens([2, 7, 11, 15]));
  assertEquals(30, sumOfEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
});

Deno.test("#emojiArtGenerator", () => {
  assertEquals(
    "🇭🇳🇪🇬🇱🇷🇱🇷🇴🇲❓❓🇼🇸🇴🇲🇷🇺🇱🇷🇩🇪❓",
    emojiArtGenerator("Hello, World!")
  );
});

Deno.test("#evenOddNumbers", () => {
  assertEquals({ even: 3, odd: 3 }, evenOddNumber([1, 2, 3, 4, 5, 6]));
});

Deno.test("#countCharacters", () => {
  assertEquals(2, countCharacters("hello world", 2, 8, "l"));
  assertEquals(4, countCharacters("abababa", 0, 7, "a"));
});

Deno.test("#countCharacters", () => {
  assertEquals(2, arithmeticTriplets([0, 1, 4, 6, 7, 10], 3));
  assertEquals(2, arithmeticTriplets([4, 5, 6, 7, 8, 9], 2));
});

Deno.test("#mergeTrees", () => {
  // root 1

  const r1leftLeft = new TreeNode(5, null, null);
  const r1left = new TreeNode(3, r1leftLeft, null);
  const r1right = new TreeNode(2, null, null);
  const r1root = new TreeNode(1, r1left, r1right);

  // root 2
  const r2leftRight = new TreeNode(4, null, null);
  const r2left = new TreeNode(1, null, r2leftRight);

  const r2rightRight = new TreeNode(7, null, null);

  const r2right = new TreeNode(3, null, r2rightRight);

  const r2root = new TreeNode(2, r2left, r2right);
  const root = mergeTrees(r1root, r2root);
  assertEquals(root?.val, 3);
});

Deno.test("#knightProbability", () => {
  assertEquals(knightProbability(3, 2, 0, 0), 0.0625);
});

Deno.test("#isSequence", () => {
  assertEquals(isSequence("abc", "ahbgdc"), true);
  assertEquals(isSequence("axc", "ahbgdc"), false);
});

Deno.test("#isValid", () => {
  assertEquals(isValid("()"), true);
  assertEquals(isValid("(()"), false);
});

Deno.test("#largestValue", () => {
  const node1 = new TreeNode(1);
  const node3_1 = new TreeNode(3);
  const node2 = new TreeNode(2);
  const node5 = new TreeNode(5);
  const node3_2 = new TreeNode(3);
  const node9 = new TreeNode(9);

  node1.left = node3_1;
  node1.right = node2;
  node3_1.left = node5;
  node3_1.right = node3_2;
  node2.right = node9;
  assertEquals(largestValues(node1), [1, 3, 9]);
});

Deno.test("#numberOfEmployeesWhoMetTarget", () => {
  assertEquals(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2), 3);
});

Deno.test("#interpret", () => {
  assertEquals(interpret("G()(al)"), "Goal");
});

Deno.test("#countPairs", () => {
  assertEquals(countPairs([-1, 1, 2, 3, 1], 2), 3);
  assertEquals(countPairs([-6, 2, 5, -2, -7, -1, 3], -2), 10);
});

Deno.test("#getMinimumDifference", () => {
  const root = new TreeNode(4);
  root.left = new TreeNode(2);
  root.right = new TreeNode(6);
  root.left.left = new TreeNode(1);
  root.left.right = new TreeNode(3);
  assertEquals(getMinimumDifference(root), 1);
  const root2 = new TreeNode(678);
  root2.left = new TreeNode(67);
  root2.right = new TreeNode(853);
  root2.left.left = null;
  root2.left.right = new TreeNode(633);
  root2.right.left = null;
  root2.right.right = new TreeNode(989);
  assertEquals(getMinimumDifference(root2), 45);
});

Deno.test("#balancedStringSplit", () => {
  assertEquals(balancedStringSplit("RLRRLLRLRL"), 4);
});

Deno.test("#cellsInRange", () => {
  assertEquals(cellsInRange("K1:L2"), ["K1", "K2", "L1", "L2"]);
  assertEquals(cellsInRange("A1:F1"), ["A1", "B1", "C1", "D1", "E1", "F1"]);
  assertEquals(cellsInRange("P7:Z7"), [
    "P7",
    "Q7",
    "R7",
    "S7",
    "T7",
    "U7",
    "V7",
    "W7",
    "X7",
    "Y7",
    "Z7",
  ]);
});

Deno.test("#longestPalindrome", () => {
  assertEquals(longestPalindrome("babad"), "bab");
  assertEquals(longestPalindrome("cbbd"), "bb");
  assertEquals(longestPalindrome("a"), "a");
});

Deno.test("#backspaceCompare", () => {
  assertEquals(backspaceCompare("ab#c", "ad#c"), true);
  assertEquals(backspaceCompare("ab##", "c#d#"), true);
  assertEquals(backspaceCompare("a#c", "b"), false);
});
