import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { longestSubstring, minWindowSubstring } from "./index.ts";

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
