import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { longestSubstring } from "./index.ts";

Deno.test("Sliding Window", () => {
  assertEquals(3, longestSubstring("abcabcbb"));
  assertEquals(1, longestSubstring("bbbbb"));
  assertEquals(3, longestSubstring("pwwkew"));
  assertEquals(2, longestSubstring("aab"));
  assertEquals(7, longestSubstring("abcdefg"));
});
