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
