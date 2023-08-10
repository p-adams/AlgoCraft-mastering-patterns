import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import {
  arrReverse,
  checkPalindromeRec,
  checkPalindromeItr,
  findMaxDiff,
  maxMinElements,
  removeDuplicates,
  twoSum,
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
