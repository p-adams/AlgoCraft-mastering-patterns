import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import {
  fruitBasket,
  longestSubstring,
  maxSumSubArray,
  minWindowSubstring,
} from "./index.ts";

Deno.test("#longestSubstring", () => {
  assertEquals(3, longestSubstring("abcabcbb"));
  assertEquals(1, longestSubstring("bbbbb"));
  assertEquals(3, longestSubstring("pwwkew"));
  assertEquals(2, longestSubstring("aab"));
  assertEquals(7, longestSubstring("abcdefg"));
});

Deno.test("#minWindowSubstring", () => {
  const input1 = "ADOBECODEBANC";
  const input2 = "ABC";
  const input3 = "aa";
  const input4 = "aa";
  const input5 = "ABCDE";
  const input6 = "ABC";
  assertEquals("BANC", minWindowSubstring(input1, input2));
  assertEquals("aa", minWindowSubstring(input3, input4));
  assertEquals("ABC", minWindowSubstring(input5, input6));
});

Deno.test("#maxSumSubArray", () => {
  assertEquals(9, maxSumSubArray([2, 1, 5, 1, 3, 2], 3));
  assertEquals(24, maxSumSubArray([1, 4, 2, 10, 2, 3, 1, 0, 20], 4));
  assertEquals(9, maxSumSubArray([1, 2, 3, 4, 5], 2));
  assertEquals(5, maxSumSubArray([4, -2, 1, -3, 2, 3], 2));
  assertEquals(8, maxSumSubArray([3, -1, 4, -2, 8], 1));
});

Deno.test("#fruitBasket", () => {
  assertEquals(4, fruitBasket([1, 2, 1, 2, 3]));
  assertEquals(5, fruitBasket([3, 3, 3, 1, 2, 1, 1, 2, 3, 3]));
  assertEquals(2, fruitBasket([1, 2, 3, 4, 5, 6, 7]));
  assertEquals(8, fruitBasket([1, 1, 1, 1, 2, 2, 2, 2]));
  assertEquals(4, fruitBasket([1, 2, 2, 3, 3, 4]));
});
