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
