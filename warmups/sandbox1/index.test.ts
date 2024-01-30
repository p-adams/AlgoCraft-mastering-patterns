import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import Sandbox1 from "./index.ts";
import { NumArray } from "../models.ts";
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
