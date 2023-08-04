import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { maxMinElements } from "./index.ts";

Deno.test("#maxMinElements", () => {
  assertEquals([5, 1], maxMinElements([1, 2, 3, 4, 5]));
  assertEquals([10, -2], maxMinElements([10, -2, 5, 7]));
  assertEquals([-Infinity, Infinity], maxMinElements([]));
});
