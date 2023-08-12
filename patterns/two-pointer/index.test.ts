import { assertEquals } from "https://deno.land/std@0.113.0/testing/asserts.ts";
import { containerWithMostWater, removeElement } from "./index.ts";

Deno.test("#containerWithMostWater", () => {
  assertEquals(49, containerWithMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7]));
});

Deno.test("#removeElement ", () => {
  assertEquals(2, removeElement([3, 2, 2, 3], 3));
  assertEquals(1, removeElement([2, 2, 2, 1], 2));
});
