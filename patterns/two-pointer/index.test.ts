import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { containerWithMostWater } from "./index.ts";

Deno.test("Two Pointer", () => {
  assertEquals(49, containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
});
