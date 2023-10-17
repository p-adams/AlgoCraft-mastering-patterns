import { assertEquals } from "https://deno.land/std@0.200.0/assert/mod.ts";
import {
  compress,
  gcdOfStrings,
  increasingTriplet,
  mergeAlternately,
  productExceptSelf,
  reverseVowels,
  reverseWords,
} from "./index.ts";

Deno.test("LC 75: array | string", () => {
  assertEquals(mergeAlternately("abc", "pqr"), "apbqcr");
  assertEquals(gcdOfStrings("ABABAB", "ABAB"), "AB");
  assertEquals(reverseVowels("hello"), "holle");
  assertEquals(
    reverseWords("colorless green ideas sleep furiously"),
    "furiously sleep ideas green colorless"
  );
  assertEquals(productExceptSelf([1, 2, 3, 4]), [24, 12, 8, 6]);
  assertEquals(productExceptSelf([-1, 1, 0, -3, 3]), [0, 0, 9, 0, 0]);
  assertEquals(increasingTriplet([1, 2, 3, 4, 5]), true);
  assertEquals(increasingTriplet([5, 4, 3, 2, 1]), false);
  assertEquals(increasingTriplet([2, 1, 5, 0, 4, 6]), true);
  assertEquals(compress(["a", "a", "b", "b", "c", "c", "c"]), 6);
  assertEquals(compress(["a"]), 1);
  assertEquals(
    compress(["a", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b", "b"]),
    4
  );
});
