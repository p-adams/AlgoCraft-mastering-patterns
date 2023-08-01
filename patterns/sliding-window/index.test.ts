import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { longestSubstring } from "./index.ts";

Deno.test("Sliding Window", () => {
  assertEquals("abc", longestSubstring("abcabcbb"));
  assertEquals("b", longestSubstring("bbbbb"));
  assertEquals("wke", longestSubstring("pwwkew"));
  assertEquals("ab", longestSubstring("aab"));
  assertEquals("abcdefg", longestSubstring("abcdefg"));
});
